# Stage 1: Build the Next.js app
FROM node:22 AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV="production"
ENV NEXT_PUBLIC_API_URL = "https://www.bohio.net"

WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files first for caching
COPY package.json pnpm-lock.yaml ./ 

# Install dependencies with caching
RUN pnpm install --frozen-lockfile

# Copy the rest of the app files and build the app
COPY . . 
RUN pnpm run build

# Stage 2: Run the Next.js server
FROM node:22 AS runner
WORKDIR /app

# Install pnpm again in the final stage
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only the necessary built files from the builder stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose Next.js default port
EXPOSE 3000

CMD ["pnpm", "start"]
