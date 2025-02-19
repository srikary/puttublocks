/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating motor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

// goog.provide('Blockly.Arduino.Zumo_motors');

// goog.require('Blockly.Arduino');

Blockly.Arduino['zumo_motors_FN'] = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction=="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction=="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction=="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction=="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction=="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//input a simulation value to set the speed\n"+
     "  analogWrite(10,0);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};
Blockly.Arduino.zumo_motors_FL = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//input a simulation value to set the speed\n"+
     "  analogWrite(10,0);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FR = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//input a simulation value to set the speed\n"+
     "  analogWrite(10,0);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FB = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//input a simulation value to set the speed\n"+
     "  analogWrite(10,0);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FNs = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FLs = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FRs = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FBs = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.zumo_motors_FUs = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC);
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC);
  var flipL = Blockly.Arduino.valueToCode(this, 'FLIPL', Blockly.Arduino.ORDER_ATOMIC); 
  var flipR = Blockly.Arduino.valueToCode(this, 'FLIPR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_boolean_flip'] = ""+
  "  boolean FRight =!"+flipR+"; //Right/B Clockwise Right/B Forward\n"+
  "  boolean BRight ="+flipR+"; //Right/B Anti-Clockwise Right/B Backward\n"+
  "  boolean FLeft =!"+flipL+"; //Left/A Clockwise Left/A Forward\n"+
  "  boolean BLeft ="+flipL+"; //Left/A Anti-Clockwise Left/A Backward\n";  
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,FRight);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,FLeft);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction=="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,BRight);//turn DC Motor B (right) move back\n"+
     "  digitalWrite(8,FLeft);//turn DC Motor A (left) move forward\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction=="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,FRight);//turn DC Motor B (right) move forward\n"+
     "  digitalWrite(8,BLeft);//turn DC Motor A (left) move backward\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction=="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,BRight);//turn DC Motor B (right) move backward\n"+
     "  digitalWrite(8,BLeft);//turn DC Motor A (left) move backward\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction=="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};