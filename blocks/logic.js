/**
 * A dictionary of the block definitions provided by this module.
 */
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Block for boolean data type: true and false.
  {
    'type': 'logic_boolean',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'BOOL',
        'options': [
          ['%{BKY_LOGIC_BOOLEAN_TRUE}', 'TRUE'],
          ['%{BKY_LOGIC_BOOLEAN_FALSE}', 'FALSE'],
        ],
      },
    ],
    'output': 'Boolean',
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_BOOLEAN_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_BOOLEAN_HELPURL}',
  },
  // Block for if/elseif/else condition.
  {
    'type': 'controls_if',
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '%{BKY_CONTROLS_IF_MSG_THEN} %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'mutator': 'controls_if_mutator',
    'extensions': ['controls_if_tooltip'],
  },
  // If/else block that does not use a mutator.
  {
    'type': 'controls_ifelse',
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': 'Boolean',
      },
    ],
    'message1': '%{BKY_CONTROLS_IF_MSG_THEN} %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'message2': '%{BKY_CONTROLS_IF_MSG_ELSE} %1',
    'args2': [
      {
        'type': 'input_statement',
        'name': 'ELSE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKYCONTROLS_IF_TOOLTIP_2}',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'extensions': ['controls_if_tooltip'],
  },
  // Block for comparison operator.
  {
    'type': 'logic_compare',
    'message0': '%1 %2 %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['\u200F<', 'LT'],
          ['\u200F\u2264', 'LTE'],
          ['\u200F>', 'GT'],
          ['\u200F\u2265', 'GTE'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
      },
    ],
    'inputsInline': true,
    'output': 'Boolean',
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['logic_compare', 'logic_op_tooltip'],
  },
  // Block for logical operations: 'and', 'or'.
  {
    'type': 'logic_operation',
    'message0': '%1 %2 %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
        'check': 'Boolean',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['%{BKY_LOGIC_OPERATION_AND}', 'AND'],
          ['%{BKY_LOGIC_OPERATION_OR}', 'OR'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
        'check': 'Boolean',
      },
    ],
    'inputsInline': true,
    'output': 'Boolean',
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_OPERATION_HELPURL}',
    'extensions': ['logic_op_tooltip'],
  },
  // Block for negation.
  {
    'type': 'logic_negate',
    'message0': '%{BKY_LOGIC_NEGATE_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'BOOL',
        'check': 'Boolean',
      },
    ],
    'output': 'Boolean',
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NEGATE_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NEGATE_HELPURL}',
  },
  // Block for null data type.
  {
    'type': 'logic_null',
    'message0': '%{BKY_LOGIC_NULL}',
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for ternary operator.
  {
    'type': 'logic_ternary',
    'message0': '%{BKY_LOGIC_TERNARY_CONDITION} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF',
        'check': 'Boolean',
      },
    ],
    'message1': '%{BKY_LOGIC_TERNARY_IF_TRUE} %1',
    'args1': [
      {
        'type': 'input_value',
        'name': 'THEN',
      },
    ],
    'message2': '%{BKY_LOGIC_TERNARY_IF_FALSE} %1',
    'args2': [
      {
        'type': 'input_value',
        'name': 'ELSE',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_TERNARY_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_TERNARY_HELPURL}',
    'extensions': ['logic_ternary'],
  },
  // Block representing the if statement in the controls_if mutator.
  {
    'type': 'controls_if_if',
    'message0': '%{BKY_CONTROLS_IF_IF_TITLE_IF}',
    'nextStatement': null,
    'enableContextMenu': false,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_CONTROLS_IF_IF_TOOLTIP}',
  },
  // Block representing the else-if statement in the controls_if mutator.
  {
    'type': 'controls_if_elseif',
    'message0': '%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}',
    'previousStatement': null,
    'nextStatement': null,
    'enableContextMenu': false,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}',
  },
  // Block representing the else statement in the controls_if mutator.
  {
    'type': 'controls_if_else',
    'message0': '%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}',
    'previousStatement': null,
    'enableContextMenu': false,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_CONTROLS_IF_ELSE_TOOLTIP}',
  },
]);

/**
 * Tooltip text, keyed by block OP value. Used by logic_compare and
 * logic_operation blocks.
 *
 * @see {Extensions#buildTooltipForDropdown}
 */



/**
 * Mutator methods added to controls_if blocks.
 */
const CONTROLS_IF_MUTATOR_MIXIN = {
  elseifCount_: 0,
  elseCount_: 0,

  /**
   * Create XML to represent the number of else-if and else inputs.
   * Backwards compatible serialization implementation.
   *
   * @returns XML storage element.
   */
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    const container = xmlUtils.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', String(this.elseifCount_));
    }
    if (this.elseCount_) {
      container.setAttribute('else', '1');
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * Backwards compatible serialization implementation.
   *
   * @param xmlElement XML storage element.
   */
  domToMutation: function (xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.rebuildShape_();
  },
  /**
   * Returns the state of this block as a JSON serializable object.
   *
   * @returns The state of this block, ie the else if count and else state.
   */
  saveExtraState: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    const state = Object.create(null);
    if (this.elseifCount_) {
      state['elseIfCount'] = this.elseifCount_;
    }
    if (this.elseCount_) {
      state['hasElse'] = true;
    }
    return state;
  },
  /**
   * Applies the given state to this block.
   *
   * @param state The state to apply to this block, ie the else if count
   and
   *     else state.
   */
  loadExtraState: function (IfExtraState) {
    this.elseifCount_ = state['elseIfCount'] || 0;
    this.elseCount_ = state['hasElse'] ? 1 : 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   *
   * @param workspace MutatorIcon's workspace.
   * @returns Root block in mutator.
   */
  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('controls_if_if');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 1; i <= this.elseifCount_; i++) {
      const elseifBlock = workspace.newBlock('controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      const elseBlock = workspace.newBlock('controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   *
   * @param containerBlock Root block in mutator.
   */
  compose: function (containerBlock) {
    let clauseBlock =
      containerBlock.nextConnection.targetBlock()| null;
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    // Connections arrays are passed to .reconnectChildBlocks_() which
    // takes 1-based arrays, so are initialised with a dummy value at
    // index 0 for convenience.
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;
    while (clauseBlock) {
      if (clauseBlock.isInsertionMarker()) {
        clauseBlock = clauseBlock.getNextBlock();
        continue;
      }
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          // TODO(#6920): null valid, undefined not.
          valueConnections.push(
            clauseBlock.valueConnection_,
          );
          statementConnections.push(
            clauseBlock.statementConnection_,
          );
          break;
        case 'controls_if_else':
          this.elseCount_++;
          elseStatementConnection =
            clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.getNextBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(
      valueConnections,
      statementConnections,
      elseStatementConnection,
    );
  },
  /**
   * Store pointers to any connected child blocks.
   *
   * @param containerBlock Root block in mutator.
   */
  saveConnections: function ( containerBlock) {
    let clauseBlock =
      containerBlock.nextConnection.targetBlock();
    let i = 1;
    while (clauseBlock) {
      if (clauseBlock.isInsertionMarker()) {
        clauseBlock = clauseBlock.getNextBlock();
        continue;
      }
      switch (clauseBlock.type) {
        case 'controls_if_elseif': {
          const inputIf = this.getInput('IF' + i);
          const inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
            inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        }
        case 'controls_if_else': {
          const inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          break;
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.getNextBlock();
    }
  },
  /**
   * Reconstructs the block with all child blocks attached.
   */
  rebuildShape_: function () {
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnectio = null;

    if (this.getInput('ELSE')) {
      elseStatementConnection =
        this.getInput('ELSE').connection.targetConnection;
    }
    for (let i = 1; this.getInput('IF' + i); i++) {
      const inputIf = this.getInput('IF' + i);
      const inputDo = this.getInput('DO' + i);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
    }
    this.updateShape_();
    this.reconnectChildBlocks_(
      valueConnections,
      statementConnections,
      elseStatementConnection,
    );
  },
  /**
   * Modify this block to have the correct number of inputs.
   *
   * @internal
   */
  updateShape_: function () {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    for (let i = 1; this.getInput('IF' + i); i++) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    // Rebuild block.
    for (let i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck('Boolean')
        .appendField(Msg['CONTROLS_IF_MSG_ELSEIF']);
      this.appendStatementInput('DO' + i).appendField(
        Msg['CONTROLS_IF_MSG_THEN'],
      );
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE').appendField(
        Msg['CONTROLS_IF_MSG_ELSE'],
      );
    }
  },
  /**
   * Reconnects child blocks.
   *
   * @param valueConnections 1-based array of value connections for
   *     'if' input.  Value at index [0] ignored.
   * @param statementConnections 1-based array of statement
   *     connections for 'do' input.  Value at index [0] ignored.
   * @param elseStatementConnection Statement connection for else input.
   */
  reconnectChildBlocks_: function (valueConnections, statementConnections, elseStatementConnection) {
    for (let i = 1; i <= this.elseifCount_; i++) {
      valueConnections[i]?.reconnect(this, 'IF' + i);
      statementConnections[i]?.reconnect(this, 'DO' + i);
    }
    elseStatementConnection?.reconnect(this, 'ELSE');
  },
};

// Blockly.Extensions.registerMutator(
//   'controls_if_mutator',
//   CONTROLS_IF_MUTATOR_MIXIN,
//   null, // TODO(#6920)
//   ['controls_if_elseif', 'controls_if_else'],
// );


/**
 * Adds dynamic type validation for the left and right sides of a
 * logic_compare block.
 */
const LOGIC_COMPARE_ONCHANGE_MIXIN = {
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   *
   * @param e Change event.
   */
  onchange: function (e) {
    if (!this.prevBlocks_) {
      this.prevBlocks_ = [null, null];
    }

    const blockA = this.getInputTargetBlock('A');
    const blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't
    // match.
    if (
      blockA &&
      blockB &&
      !this.workspace.connectionChecker.doTypeChecks(
        blockA.outputConnection,
        blockB.outputConnection,
      )
    ) {
      // Mismatch between two inputs.  Revert the block connections,
      // bumping away the newly connected block(s).
      Events.setGroup(e.group);
      const prevA = this.prevBlocks_[0];
      if (prevA !== blockA) {
        blockA.unplug();
        if (prevA && !prevA.isDisposed() && !prevA.isShadow()) {
          // The shadow block is automatically replaced during unplug().
          this.getInput('A').connection.connect(prevA.outputConnection);
        }
      }
      const prevB = this.prevBlocks_[1];
      if (prevB !== blockB) {
        blockB.unplug();
        if (prevB && !prevB.isDisposed() && !prevB.isShadow()) {
          // The shadow block is automatically replaced during unplug().
          this.getInput('B').connection.connect(prevB.outputConnection);
        }
      }
      this.bumpNeighbours();
      Events.setGroup(false);
    }
    this.prevBlocks_[0] = this.getInputTargetBlock('A');
    this.prevBlocks_[1] = this.getInputTargetBlock('B');
  },
};

/**
 * "logic_compare" extension function. Adds type left and right side type
 * checking to "logic_compare" blocks.
 */
const LOGIC_COMPARE_EXTENSION = function () {
  // Add onchange handler to ensure types are compatible.
  this.mixin(LOGIC_COMPARE_ONCHANGE_MIXIN);
};

// Blockly.Extensions.register('logic_compare', LOGIC_COMPARE_EXTENSION);

/**
 * Adds type coordination between inputs and output.
 */
const LOGIC_TERNARY_ONCHANGE_MIXIN = {
  prevParentConnection_: null,

  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types.
   */
  onchange: function (e) {
    const blockA = this.getInputTargetBlock('THEN');
    const blockB = this.getInputTargetBlock('ELSE');
    const parentConnection = this.outputConnection.targetConnection;
    // Disconnect blocks that existed prior to this change if they don't
    // match.
    if ((blockA || blockB) && parentConnection) {
      for (let i = 0; i < 2; i++) {
        const block = i === 1 ? blockA : blockB;
        if (
          block &&
          !block.workspace.connectionChecker.doTypeChecks(
            block.outputConnection,
            parentConnection,
          )
        ) {
          // Ensure that any disconnections are grouped with the causing
          // event.
          Events.setGroup(e.group);
          if (parentConnection === this.prevParentConnection_) {
            this.unplug();
            parentConnection.getSourceBlock().bumpNeighbours();
          } else {
            block.unplug();
            block.bumpNeighbours();
          }
          Events.setGroup(false);
        }
      }
    }
    this.prevParentConnection_ = parentConnection;
  },
};

// Blockly.Extensions.registerMixin('logic_ternary', LOGIC_TERNARY_ONCHANGE_MIXIN);

// Register provided blocks.
Blockly.common.defineBlocks(blocks);