// сбрасывает выбранные элементы в селекте
// для настройки визуала кнопки
["button_size", "button_view", "button_has-icon"].forEach((item) => {
  document.getElementById(item).selectedIndex = 0;
});

// хранит предыдущие классы для замены через селект
let btnSizeSelectPrevValue = "mw-button_size_m";
let btnViewSelectPrevValue = "mw-button_view_primary";
let btnHasIconSelectPrevValue = "mw-button_has-icon_no-icon";
let innerIconViewPrevValue = "mw-icon_view_primary-inverse";

// заменяет классы у стендаа кнопки через id
const getActiveSelectOption = (id) => {
  const optionValue = document.getElementById(id).value;
  const codeSnippetNode = document.getElementById("button_code");
  const previewButton = document.getElementById("preview-button");
  const previewButtonClassList = previewButton.classList;
  const previewButtonIcon = previewButton.getElementsByClassName("mw-icon");
  const newClassName = "mw-" + id + "_" + optionValue;
  if (id.includes("size")) {
    previewButtonClassList.remove(btnSizeSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnSizeSelectPrevValue = newClassName;
  }

  if (id.includes("view")) {
    previewButtonClassList.remove(btnViewSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnViewSelectPrevValue = newClassName;

    if (id.includes("primary")) {
      previewButtonIcon[0].classList.remove(innerIconViewPrevValue);
      previewButtonIcon[0].classList.add("mw-icon_view_primary-inverse");
      innerIconViewPrevValue = "mw-icon_view_primary-inverse";
    } else {
      previewButtonIcon[0].classList.remove(innerIconViewPrevValue);
      previewButtonIcon[0].classList.add("mw-icon_view_accent");
      innerIconViewPrevValue = "mw-icon_view_accent";
    }
  }

  if (id.includes("icon")) {
    previewButtonClassList.remove(btnHasIconSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnHasIconSelectPrevValue = newClassName;

    // if (optionValue === "only-icon") {
    //   previewButton.setAttribute(
    //     "style",
    //     `padding: ${btnSizeSelectPrevValue.includes("size_m") ? "16" : "8"}px;`
    //   );
    // }
  }

  if (!previewButtonClassList.contains("mw-button_has-icon_only-icon")) {
    previewButton.setAttribute("style", ``);
  } else {
    if (previewButtonClassList.contains("mw-button_size_m")) {
      previewButton.setAttribute("style", `padding: 16px;`);
    } else if (previewButtonClassList.contains("mw-button_size_s")) {
      previewButton.setAttribute("style", `padding: 8px;`);
    }
  }

  codeSnippetNode.innerHTML = `&lt;div class="${
    document.getElementById("preview-button").classList
  }"&gt;&lt;/div&gt;`;
  hljs.highlightElement(codeSnippetNode);
};
