# ================================================================
#             B U I L D E R     S T A G E
# ================================================================
FROM node:14 AS stage1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json ./

RUN npm install
# Copying source files
COPY . ./

# Building app for dev (build:dev or build:live or build:stage)
RUN npm build

# ================================================================
#            D E P L O Y     S T A G E
# ================================================================
FROM node:14.16-alpine
COPY --from=stage1 /usr/src/app /app/
WORKDIR /app

EXPOSE 3000

# Running the app
CMD ["npm", "start"]