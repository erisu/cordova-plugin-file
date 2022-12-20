/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

const { join } = require('path');
const { readFileSync } = require('fs-extra');

// @todo implement all method
// @todo split into multiple files if this becomes large?
// @todo create helper methods for common tasks and place them in a separate file?
module.exports = {
  getDirectory: async () => {
    // @todo implement this method
  },

  removeRecursively: async () => {
    // @todo implement this method
  },

  getFile: async ([dirname, path, flags] = args) => {
    // @todo update implementation to handle proper file read, catch failures, usage of flags.
    try {
      return readFileSync(join(dirname, path));
    } catch (e) {
      // What to do here if the file doesn't exist?
      return false;
    }
  },

  readEntries: async () => {
    // @todo implement this method
  },

  getFileMetadata: async () => {
    // @todo implement this method
  },

  setMetadata: async () => {
    // @todo implement this method
  },

  moveTo: async () => {
    // @todo implement this method
  },

  copyTo: async () => {
    // @todo implement this method
  },

  remove: async () => {
    // @todo implement this method
  },

  getParent: async () => {
    // @todo implement this method
  },

  readType: async () => {
    // @todo implement this method
  },

  requestAllPaths: async () => {
    // @todo implement this method
  },

  requestAllFileSystems: async () => {
    // @todo implement this method
  },

  write: async () => {
    // @todo implement this method
  },

  truncate: async () => {
    // @todo implement this method
  },

  requestFileSystem: async () => {
    // @todo implement this method
  },

  resolveLocalFileSystemURI: async () => {
    // @todo implement this method
  }
};
