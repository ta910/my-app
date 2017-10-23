export function handleClick(i) {
  return {
    type: 'HANDLE_CLICK',
    index: i,
  };
}

export function jumpTo(step) {
  return {
    type: 'JUMP_TO',
    stepNumber: step,
    xIsNext: (step % 2) === 0,
  };
}
