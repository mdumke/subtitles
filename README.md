# Subtitles

## Setup

This uses an express server with socket.io to provide access to multiple channels.

For development purposes, it is convenient to work have two terminals open:

1. One terminal running `npm build:watch` to rebuild the frontend,
2. The other running `npm start:watch` to restart express on code changes



## TODO:
- [x] highlight current row
- [x] change current row on click
- [x] change current row on arrow-keys
- [ ] move admin area to /admin
- [ ] add socket.io
- [ ] secure admin area with basic auth
- [ ] build client interface
- [ ] add different client channels
- [ ] include bootstrap
