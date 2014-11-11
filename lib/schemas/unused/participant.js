module.exports = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
        "name": {
            "$ref": "http://local.com/common_models#/properties/cda_name"
        },
        "phone": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_phone"
            }
        },
        "role": {
            "type": "string"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_id"
            }
        }
    },
    "additionalProperties": false
};