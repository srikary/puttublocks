/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for variable blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

// goog.provide('Blockly.Arduino.procedures');

// goog.require('Blockly.Arduino');

//enhanced by JP Fontaine from forum
Blockly.Arduino.procedures_defreturn = function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    var returnType = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]) || 'void';
    var args = '';
    for (var x = 0; x < block.arguments_.length; x++) {
        var arg = '';
        var argType = '';
        if (block.argumentsTypes_[x]) {
            argType = Blockly.Arduino.getArduinoType_(block.argumentsTypes_[x]);
        } else {
            argType = Blockly.Arduino.getArduinoType_(Blockly.Types.UNDEF);
        }
        arg = Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
        args += argType + ' ' + arg + ', ';
    }
    var code = returnType + ' ' + funcName + '(' + args.slice(0, -2) + ') {\n' + branch + returnValue + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
// Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;

Blockly.Arduino['procedures_defnoreturn'] = function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var args = '';
    for (var x = 0; x < block.arguments_.length; x++) {
        var arg = '';
        var argType = '';
        if (block.argumentsTypes_[x]) {
            argType = Blockly.Arduino.getArduinoType_(block.argumentsTypes_[x]);
        } else {
            argType = Blockly.Arduino.getArduinoType_(Blockly.Types.UNDEF);
        }
        arg = Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
        args += argType + ' ' + arg + ', ';
    }
    var code = 'void ' + funcName + '(' + args.slice(0, -2) + ') {\n' + branch + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return null;
};


Blockly.Arduino.procedures_callreturn = function() {
  // Call a procedure with a return value.
  var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,
        Blockly.Arduino.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino.procedures_callnoreturn = function() {
  // Call a procedure with no return value.
  var funcName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,
        Blockly.Arduino.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.Arduino.procedures_ifreturn = function() {
  // Conditionally return value from a procedure.
  var condition = Blockly.Arduino.valueToCode(this, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (this.hasReturnValue_) {
    var value = Blockly.Arduino.valueToCode(this, 'VALUE',
        Blockly.Arduino.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
