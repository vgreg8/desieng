// сбрасывает выбранные элементы в селекте
// для настройки визуала кнопки
["input_state", "input_has-icon"].forEach((item) => {
    document.getElementById(item).selectedIndex = 0;
  });

// хранит предыдущие классы для замены через селект
let inputHasIconSelectPrevValue = "mw-input_has-icon_none";

// заменяет классы у стендаа кнопки через id
const getInputActiveSelectOption = (id) => {
  const optionValue = document.getElementById(id).value;
  const codeSnippetNode = document.getElementById("input_code");
  const previewInputClassList = document.getElementById("preview-input").classList;
  const newClassName = "mw-" + id + "_" + optionValue;
  
  if (id.includes("state")) {
    previewInputClassList.toggle('mw-input_state_error')
  }

  if (id.includes("icon")) {
    previewInputClassList.remove(inputHasIconSelectPrevValue);
    previewInputClassList.add(newClassName);
    inputHasIconSelectPrevValue = newClassName;
  }

  codeSnippetNode.innerHTML = `&lt;div class="${document.getElementById("preview-input").classList}"&gt;&lt;/div&gt;`;
  hljs.highlightElement(codeSnippetNode);
};
