/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.covid19api.ApiCountries', null, global);
goog.exportSymbol('proto.covid19api.ApiCountries.Item', null, global);
goog.exportSymbol('proto.covid19api.ApiRequest', null, global);
goog.exportSymbol('proto.covid19api.ApiSummary', null, global);
goog.exportSymbol('proto.covid19api.ApiSummary.Item', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.covid19api.ApiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.covid19api.ApiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.covid19api.ApiRequest.displayName = 'proto.covid19api.ApiRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.covid19api.ApiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.covid19api.ApiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.covid19api.ApiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    country: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.covid19api.ApiRequest}
 */
proto.covid19api.ApiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.covid19api.ApiRequest;
  return proto.covid19api.ApiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.covid19api.ApiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.covid19api.ApiRequest}
 */
proto.covid19api.ApiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.covid19api.ApiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.covid19api.ApiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.covid19api.ApiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string country = 1;
 * @return {string}
 */
proto.covid19api.ApiRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.covid19api.ApiRequest.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.covid19api.ApiRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.covid19api.ApiRequest.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.covid19api.ApiCountries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.covid19api.ApiCountries.repeatedFields_, null);
};
goog.inherits(proto.covid19api.ApiCountries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.covid19api.ApiCountries.displayName = 'proto.covid19api.ApiCountries';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.covid19api.ApiCountries.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.covid19api.ApiCountries.prototype.toObject = function(opt_includeInstance) {
  return proto.covid19api.ApiCountries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.covid19api.ApiCountries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiCountries.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.covid19api.ApiCountries.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.covid19api.ApiCountries}
 */
proto.covid19api.ApiCountries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.covid19api.ApiCountries;
  return proto.covid19api.ApiCountries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.covid19api.ApiCountries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.covid19api.ApiCountries}
 */
proto.covid19api.ApiCountries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.covid19api.ApiCountries.Item;
      reader.readMessage(value,proto.covid19api.ApiCountries.Item.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.covid19api.ApiCountries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.covid19api.ApiCountries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.covid19api.ApiCountries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiCountries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.covid19api.ApiCountries.Item.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.covid19api.ApiCountries.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.covid19api.ApiCountries.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.covid19api.ApiCountries.Item.displayName = 'proto.covid19api.ApiCountries.Item';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.covid19api.ApiCountries.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.covid19api.ApiCountries.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.covid19api.ApiCountries.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiCountries.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    country: jspb.Message.getFieldWithDefault(msg, 1, ""),
    slug: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iso2: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.covid19api.ApiCountries.Item}
 */
proto.covid19api.ApiCountries.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.covid19api.ApiCountries.Item;
  return proto.covid19api.ApiCountries.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.covid19api.ApiCountries.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.covid19api.ApiCountries.Item}
 */
proto.covid19api.ApiCountries.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlug(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.covid19api.ApiCountries.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.covid19api.ApiCountries.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.covid19api.ApiCountries.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiCountries.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlug();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIso2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string Country = 1;
 * @return {string}
 */
proto.covid19api.ApiCountries.Item.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.covid19api.ApiCountries.Item.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Slug = 2;
 * @return {string}
 */
proto.covid19api.ApiCountries.Item.prototype.getSlug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.covid19api.ApiCountries.Item.prototype.setSlug = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ISO2 = 3;
 * @return {string}
 */
proto.covid19api.ApiCountries.Item.prototype.getIso2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.covid19api.ApiCountries.Item.prototype.setIso2 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Item item = 1;
 * @return {!Array<!proto.covid19api.ApiCountries.Item>}
 */
proto.covid19api.ApiCountries.prototype.getItemList = function() {
  return /** @type{!Array<!proto.covid19api.ApiCountries.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.covid19api.ApiCountries.Item, 1));
};


/** @param {!Array<!proto.covid19api.ApiCountries.Item>} value */
proto.covid19api.ApiCountries.prototype.setItemList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.covid19api.ApiCountries.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.covid19api.ApiCountries.Item}
 */
proto.covid19api.ApiCountries.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.covid19api.ApiCountries.Item, opt_index);
};


proto.covid19api.ApiCountries.prototype.clearItemList = function() {
  this.setItemList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.covid19api.ApiSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.covid19api.ApiSummary.repeatedFields_, null);
};
goog.inherits(proto.covid19api.ApiSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.covid19api.ApiSummary.displayName = 'proto.covid19api.ApiSummary';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.covid19api.ApiSummary.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.covid19api.ApiSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.covid19api.ApiSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.covid19api.ApiSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    global: (f = msg.getGlobal()) && proto.covid19api.ApiSummary.Item.toObject(includeInstance, f),
    countriesList: jspb.Message.toObjectList(msg.getCountriesList(),
    proto.covid19api.ApiSummary.Item.toObject, includeInstance),
    date: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.covid19api.ApiSummary}
 */
proto.covid19api.ApiSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.covid19api.ApiSummary;
  return proto.covid19api.ApiSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.covid19api.ApiSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.covid19api.ApiSummary}
 */
proto.covid19api.ApiSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.covid19api.ApiSummary.Item;
      reader.readMessage(value,proto.covid19api.ApiSummary.Item.deserializeBinaryFromReader);
      msg.setGlobal(value);
      break;
    case 2:
      var value = new proto.covid19api.ApiSummary.Item;
      reader.readMessage(value,proto.covid19api.ApiSummary.Item.deserializeBinaryFromReader);
      msg.addCountries(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.covid19api.ApiSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.covid19api.ApiSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.covid19api.ApiSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.covid19api.ApiSummary.Item.serializeBinaryToWriter
    );
  }
  f = message.getCountriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.covid19api.ApiSummary.Item.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.covid19api.ApiSummary.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.covid19api.ApiSummary.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.covid19api.ApiSummary.Item.displayName = 'proto.covid19api.ApiSummary.Item';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.covid19api.ApiSummary.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.covid19api.ApiSummary.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.covid19api.ApiSummary.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiSummary.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    country: jspb.Message.getFieldWithDefault(msg, 1, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slug: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newconfirmed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    newdeaths: jspb.Message.getFieldWithDefault(msg, 5, 0),
    newrecovered: jspb.Message.getFieldWithDefault(msg, 6, 0),
    totalconfirmed: jspb.Message.getFieldWithDefault(msg, 7, 0),
    totaldeaths: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalrecovered: jspb.Message.getFieldWithDefault(msg, 9, 0),
    date: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.covid19api.ApiSummary.Item}
 */
proto.covid19api.ApiSummary.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.covid19api.ApiSummary.Item;
  return proto.covid19api.ApiSummary.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.covid19api.ApiSummary.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.covid19api.ApiSummary.Item}
 */
proto.covid19api.ApiSummary.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlug(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewconfirmed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewdeaths(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewrecovered(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalconfirmed(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotaldeaths(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalrecovered(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.covid19api.ApiSummary.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.covid19api.ApiSummary.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.covid19api.ApiSummary.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.covid19api.ApiSummary.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSlug();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewconfirmed();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNewdeaths();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getNewrecovered();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTotalconfirmed();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getTotaldeaths();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getTotalrecovered();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string Country = 1;
 * @return {string}
 */
proto.covid19api.ApiSummary.Item.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.covid19api.ApiSummary.Item.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CountryCode = 2;
 * @return {string}
 */
proto.covid19api.ApiSummary.Item.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.covid19api.ApiSummary.Item.prototype.setCountrycode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Slug = 3;
 * @return {string}
 */
proto.covid19api.ApiSummary.Item.prototype.getSlug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.covid19api.ApiSummary.Item.prototype.setSlug = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 NewConfirmed = 4;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getNewconfirmed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setNewconfirmed = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 NewDeaths = 5;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getNewdeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setNewdeaths = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 NewRecovered = 6;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getNewrecovered = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setNewrecovered = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 TotalConfirmed = 7;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getTotalconfirmed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setTotalconfirmed = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 TotalDeaths = 8;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getTotaldeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setTotaldeaths = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 TotalRecovered = 9;
 * @return {number}
 */
proto.covid19api.ApiSummary.Item.prototype.getTotalrecovered = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.covid19api.ApiSummary.Item.prototype.setTotalrecovered = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string Date = 10;
 * @return {string}
 */
proto.covid19api.ApiSummary.Item.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.covid19api.ApiSummary.Item.prototype.setDate = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Item Global = 1;
 * @return {?proto.covid19api.ApiSummary.Item}
 */
proto.covid19api.ApiSummary.prototype.getGlobal = function() {
  return /** @type{?proto.covid19api.ApiSummary.Item} */ (
    jspb.Message.getWrapperField(this, proto.covid19api.ApiSummary.Item, 1));
};


/** @param {?proto.covid19api.ApiSummary.Item|undefined} value */
proto.covid19api.ApiSummary.prototype.setGlobal = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.covid19api.ApiSummary.prototype.clearGlobal = function() {
  this.setGlobal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.covid19api.ApiSummary.prototype.hasGlobal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item Countries = 2;
 * @return {!Array<!proto.covid19api.ApiSummary.Item>}
 */
proto.covid19api.ApiSummary.prototype.getCountriesList = function() {
  return /** @type{!Array<!proto.covid19api.ApiSummary.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.covid19api.ApiSummary.Item, 2));
};


/** @param {!Array<!proto.covid19api.ApiSummary.Item>} value */
proto.covid19api.ApiSummary.prototype.setCountriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.covid19api.ApiSummary.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.covid19api.ApiSummary.Item}
 */
proto.covid19api.ApiSummary.prototype.addCountries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.covid19api.ApiSummary.Item, opt_index);
};


proto.covid19api.ApiSummary.prototype.clearCountriesList = function() {
  this.setCountriesList([]);
};


/**
 * optional string Date = 3;
 * @return {string}
 */
proto.covid19api.ApiSummary.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.covid19api.ApiSummary.prototype.setDate = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.covid19api);