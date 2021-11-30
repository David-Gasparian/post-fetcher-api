import mongoose from 'mongoose';

import config from '../config/variable_info.js';
import Logger from '../utils/logger.js';

const {MONGOOSE_OPTION, MONGODB_URL} = config;

class MongoDb {

  /**
  * @description Initiate Mongoose connection.
  */

  static init = async () => {
   await mongoose.connect( MONGODB_URL, MONGOOSE_OPTION ).catch(MongoDb.onConnectionOpeningError);
   mongoose.connection.on('connected', MongoDb.onConnected);
   mongoose.connection.on('error', MongoDb.onError);
   mongoose.connection.on('disconnected', MongoDb.onDisconnected);
  }

  /**
  * @description Connection opening error handler.
  */
    static onConnectionOpeningError = (error) => {
      Logger.error(`Failed to init Mongoose connection: ${error.message}`)
    }

  /**
   * @description On connected event handler.
   */
    static onConnected = () => {
      Logger.info('Mongoose connected.')
    }
    
  /**
   * @description On disconnected event handler.
   */
    static onDisconnected = () => {
      Logger.error('Mongoose disconnected.')
    }
  
    /**
     * @description On error event handler.
     */
    static onError = (error) => {
      Logger.error(`Mongoose connection error: ${error.message}`)
    }
}

export default MongoDb;