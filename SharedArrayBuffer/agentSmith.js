// agent-smith.js

/**
 * Receive shared array buffer in this worker.
 */
onmessage = function(message) {
  // Worker's view of the shared data.
  let sharedHeap = new Int32Array(message.data);

  let indexToModify = 1;
  sharedHeap[indexToModify] = 100;

  // Send the index as a message back.
  postMessage(indexToModify);
};