const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    changeThemes: document.querySelector('.theme-switch__toggle'),//отримав лінк на переключатель
    bodyRef: document.querySelector('body'),//отримав лінк на боді
}

refs.changeThemes.addEventListener('change', changeTheme)//вішаємо слухача на зміни в інпуті

function changeTheme(e) {
    if(e.target.checked) {//якщо чекед вибраний  в тру добавляємо виконання чорної теми
        themeDark()
    } else {//або добавляємо виконання світлої теми
        themeLight()
    }
}
function themeDark() {
    refs.bodyRef.classList.add(Theme.DARK)//добавляємо на боді чорну тему
    refs.bodyRef.classList.remove(Theme.LIGHT)//видаляємо білу
    localStorage.setItem('themeSettings', Theme.DARK)//записуємо в локалсторедж актуальну тему
}
function themeLight() {
    refs.bodyRef.classList.add(Theme.LIGHT)
    refs.bodyRef.classList.remove(Theme.DARK)
    localStorage.setItem('themeSettings', Theme.LIGHT)
}

const localStorageOption = localStorage.getItem('themeSettings')
if(localStorageOption === Theme.DARK) {
    themeDark()
    refs.changeThemes.setAttribute('checked', 'true');//добавляємо в чекбокс тру, щоб повзунок при чорній темі був правильно переключений
} else (
    themeLight()
)

