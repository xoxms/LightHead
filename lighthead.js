let lightHead = (code, cb) => {
  let isLoop,
    inner,
    pointer = 0;
  let memory = [0];
  let stack = [];
  let add = (i) => {
    i ? (pointer += i) : "";
    if (pointer >= memory.length) memory.push(0);
  };
  for (let i = 0; i < code.length; i++) {
    let char = code[i];
    isLoop
      ? char === "["
        ? inner++
        : char === "]"
        ? inner === 0
          ? (isLoop = 0)
          : inner--
        : ""
      : "";
    switch (char) {
      case "+":
        memory[pointer]++;
        break;
      case "-":
        memory[pointer]--;
        break;
      case ">":
        add(1);
        break;
      case "<":
        add(-1);
        break;
      case ".":
        console.log(String.fromCharCode(memory[pointer]));
        break;
      case ",":
        memory[pointer] = cb();
        break;
      case "[":
        !memory[pointer] ? (isLoop = 1) : stack.push(i);
        break;
      case "]":
        memory[pointer] ? (i = stack[stack.length - 1]) : stack.pop();
        break;
    }
  }
};

module.exports = lightHead;
