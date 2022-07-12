/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/bundle.js":
/*!**********************!*\
  !*** ./js/bundle.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ \"./js/modules/game/index.js\");\n/* harmony import */ var _modules_startPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/startPage */ \"./js/modules/startPage/index.js\");\n/* harmony import */ var _modules_leaderBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/leaderBoard */ \"./js/modules/leaderBoard/index.js\");\n/* harmony import */ var _modules_command_isExistLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/command/isExistLocalStorage */ \"./js/modules/command/isExistLocalStorage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_command_isExistLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\r\n;(0,_modules_startPage__WEBPACK_IMPORTED_MODULE_2__.setMode)();\r\n(0,_modules_startPage__WEBPACK_IMPORTED_MODULE_2__.validation)();\r\n(0,_modules_startPage__WEBPACK_IMPORTED_MODULE_2__.setActualUser)();\r\n(0,_modules_startPage__WEBPACK_IMPORTED_MODULE_2__.toggleRules)();\r\n\r\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_1__.showUserName)();\r\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_1__.game)();\r\n\r\n(0,_modules_leaderBoard__WEBPACK_IMPORTED_MODULE_3__.toggleMode)();\r\n(0,_modules_leaderBoard__WEBPACK_IMPORTED_MODULE_3__.showUserScore)();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/bundle.js?");

/***/ }),

/***/ "./js/modules/command/getAllUsers.js":
/*!*******************************************!*\
  !*** ./js/modules/command/getAllUsers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getAllUsers = () => {\r\n    let users = JSON.parse(localStorage.getItem('users'));;\r\n    return users\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllUsers);\n\n//# sourceURL=webpack:///./js/modules/command/getAllUsers.js?");

/***/ }),

/***/ "./js/modules/command/getMode.js":
/*!***************************************!*\
  !*** ./js/modules/command/getMode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMode = () => {\r\n    const mode = localStorage.getItem('mode')\r\n    return mode\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMode);\n\n//# sourceURL=webpack:///./js/modules/command/getMode.js?");

/***/ }),

/***/ "./js/modules/command/getUser.js":
/*!***************************************!*\
  !*** ./js/modules/command/getUser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getUser() {\r\n    const users = JSON.parse(localStorage.getItem('users'))\r\n    const name = localStorage.getItem('activeUser')\r\n\r\n    return users.find(el => el.name === name) ?? {\r\n        name: name,\r\n        practice: 0,\r\n        timeAttack: 0\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUser);\n\n//# sourceURL=webpack:///./js/modules/command/getUser.js?");

/***/ }),

/***/ "./js/modules/command/isExist.js":
/*!***************************************!*\
  !*** ./js/modules/command/isExist.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction isExist(name, users) {\r\n    return users.some(el => el.name === name);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isExist);\n\n//# sourceURL=webpack:///./js/modules/command/isExist.js?");

/***/ }),

/***/ "./js/modules/command/isExistLocalStorage.js":
/*!***************************************************!*\
  !*** ./js/modules/command/isExistLocalStorage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getAllUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAllUsers */ \"./js/modules/command/getAllUsers.js\");\n/* harmony import */ var _getMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMode */ \"./js/modules/command/getMode.js\");\n\r\n\r\n\r\nconst isExistLocalStorage = () => {\r\n    if ((0,_getAllUsers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() === null) {\r\n        localStorage.setItem('users', JSON.stringify([]))\r\n    }\r\n    if ((0,_getMode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() === null) {\r\n        localStorage.setItem('mode', 'timeAttack')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isExistLocalStorage);\n\n//# sourceURL=webpack:///./js/modules/command/isExistLocalStorage.js?");

/***/ }),

/***/ "./js/modules/game/animationExample.js":
/*!*********************************************!*\
  !*** ./js/modules/game/animationExample.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animationExample = () => {\r\n    const gameBlock = document.querySelector('.game__mid');\r\n\r\n    gameBlock.classList.add('game__left')\r\n    gameBlock.classList.remove('game__right')\r\n\r\n    setTimeout(() => {\r\n        gameBlock.classList.remove('game__left')\r\n        gameBlock.classList.add('game__right')\r\n    }, 500);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationExample);\n\n//# sourceURL=webpack:///./js/modules/game/animationExample.js?");

/***/ }),

/***/ "./js/modules/game/animationScore.js":
/*!*******************************************!*\
  !*** ./js/modules/game/animationScore.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleClass = (elem, classes, num) => {\r\n    elem.classList.add(classes)\r\n\r\n    setTimeout(() => {\r\n        elem.classList.remove(classes)\r\n    }, num * 1000);\r\n}\r\n\r\nconst animationScore = (isCorrect) => {\r\n    const count = document.querySelector('.game__count');\r\n    const scoreBlock = document.querySelector('.game__down-left');\r\n\r\n    if (isCorrect) {\r\n        count.textContent = '+1';\r\n        toggleClass(count, 'game__count-animation', 0.4)\r\n    } else {\r\n        count.textContent = '-1';\r\n        toggleClass(count, 'game__count-animation', 0.4)\r\n        toggleClass(scoreBlock, 'game__incorrect', 0.4)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationScore);\n\n//# sourceURL=webpack:///./js/modules/game/animationScore.js?");

/***/ }),

/***/ "./js/modules/game/game.js":
/*!*********************************!*\
  !*** ./js/modules/game/game.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getMode.js */ \"./js/modules/command/getMode.js\");\n/* harmony import */ var _showScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScore.js */ \"./js/modules/game/showScore.js\");\n/* harmony import */ var _showScoreWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showScoreWindow.js */ \"./js/modules/game/showScoreWindow.js\");\n/* harmony import */ var _timerAttack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timerAttack.js */ \"./js/modules/game/timerAttack.js\");\n/* harmony import */ var _animationExample_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationExample.js */ \"./js/modules/game/animationExample.js\");\n/* harmony import */ var _animationScore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animationScore.js */ \"./js/modules/game/animationScore.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst operators = ['+', '-', '*', '/']\r\n\r\nconst getRandom = (min, max) => {\r\n    return Math.round(Math.random() * (max - min) + min)\r\n}\r\n\r\nconst sum = (a, b, operator) => {\r\n    if (operator === '+') return a + b\r\n    if (operator === '-') return a - b\r\n    if (operator === '/') return a / b\r\n    return a * b\r\n}\r\n\r\nconst generateExample = (divid) => {\r\n    const num1 = getRandom(1, 10)\r\n    const num2 = getRandom(1, 10)\r\n    const operator = divid || operators[getRandom(0, 3)]\r\n    const result = sum(num1, num2, operator)\r\n    if (operator === '/' && num1 % num2 !== 0 || num1 == num2) {\r\n        return generateExample('/')\r\n    }\r\n    return { num1, num2, operator, result }\r\n}\r\n\r\nfunction game() {\r\n    const num1 = document.querySelector('.game__num1')\r\n    const num2 = document.querySelector('.game__num2')\r\n    const operator = document.querySelector('.game__operator')\r\n    const result = document.querySelector('.game__result')\r\n    const winElement = document.querySelector('.game__score')\r\n    const stopGame = document.querySelector('.game__stop')\r\n\r\n    const renderExample = (data) => {\r\n        if (num1) {\r\n            num1.textContent = data.num1\r\n            num2.textContent = data.num2\r\n            operator.textContent = data.operator\r\n        }\r\n    }\r\n\r\n    let overallWins = 0\r\n    let score = 0\r\n    let fails = 0\r\n    let example = generateExample()\r\n    renderExample(example)\r\n\r\n    let time = 14;\r\n    if ((0,_command_getMode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() === 'timeAttack') {\r\n        (0,_timerAttack_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(time)\r\n    }\r\n\r\n    result?.addEventListener('keydown', (e) => {\r\n        if (e.key === 'Enter') {\r\n            if (!result.value) return\r\n\r\n            const isValidResult = Number(result.value) === example.result\r\n            score += isValidResult ? 1 : -1\r\n            overallWins += isValidResult ? 1 : 0\r\n            fails += !isValidResult ? 1 : 0\r\n\r\n            winElement.textContent = score\r\n            result.value = ''\r\n\r\n            setTimeout(() => {\r\n                example = generateExample()\r\n                renderExample(example)\r\n            }, 500);\r\n\r\n            (0,_animationScore_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(isValidResult)\r\n            ;(0,_animationExample_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n            ;(0,_showScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(score, overallWins, fails);\r\n        }\r\n    })\r\n\r\n    stopGame?.addEventListener('click', () => {\r\n        ;(0,_showScoreWindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        ;(0,_showScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(score, overallWins, fails, true);\r\n        time = 0;\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack:///./js/modules/game/game.js?");

/***/ }),

/***/ "./js/modules/game/index.js":
/*!**********************************!*\
  !*** ./js/modules/game/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"showUserName\": () => (/* reexport safe */ _showUserName__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/modules/game/game.js\");\n/* harmony import */ var _showUserName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUserName */ \"./js/modules/game/showUserName.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/game/index.js?");

/***/ }),

/***/ "./js/modules/game/setData.js":
/*!************************************!*\
  !*** ./js/modules/game/setData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getAllUsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getAllUsers.js */ \"./js/modules/command/getAllUsers.js\");\n/* harmony import */ var _command_getMode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../command/getMode.js */ \"./js/modules/command/getMode.js\");\n/* harmony import */ var _command_isExist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../command/isExist.js */ \"./js/modules/command/isExist.js\");\n\r\n\r\n\r\n\r\nfunction setData(activeUser) {\r\n    let users = (0,_command_getAllUsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    let mode = (0,_command_getMode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    if ((0,_command_isExist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(activeUser.name, users)) {\r\n        const user = users.find(elem => elem.name === activeUser.name);\r\n        user[mode] = activeUser[mode]\r\n    } else {\r\n        users = [...users, activeUser]\r\n    }\r\n    return localStorage.setItem('users', JSON.stringify(users))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setData);\n\n//# sourceURL=webpack:///./js/modules/game/setData.js?");

/***/ }),

/***/ "./js/modules/game/setNewScore.js":
/*!****************************************!*\
  !*** ./js/modules/game/setNewScore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getMode */ \"./js/modules/command/getMode.js\");\n/* harmony import */ var _command_getUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../command/getUser */ \"./js/modules/command/getUser.js\");\n/* harmony import */ var _setData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setData */ \"./js/modules/game/setData.js\");\n\r\n\r\n\r\n\r\nconst setNewScore = (score) => {\r\n    const user = (0,_command_getUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const mode = (0,_command_getMode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    if (user[mode] < score) {\r\n        user[mode] = score\r\n    }\r\n    (0,_setData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNewScore);\n\n//# sourceURL=webpack:///./js/modules/game/setNewScore.js?");

/***/ }),

/***/ "./js/modules/game/showScore.js":
/*!**************************************!*\
  !*** ./js/modules/game/showScore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setNewScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setNewScore.js */ \"./js/modules/game/setNewScore.js\");\n\r\n\r\nconst showScore = (score, correctNum, incorrectNum, isFinish) => {\r\n    const scoreBlock = document.querySelector('.score__count');\r\n    const correct = document.querySelector('.score__correct');\r\n    const incorrect = document.querySelector('.score__incorrect');\r\n\r\n    if (scoreBlock) {\r\n        scoreBlock.textContent = score;\r\n        correct.textContent = 'Correct: ' + correctNum;\r\n        incorrect.textContent = 'Incorrect: ' + incorrectNum;\r\n    }\r\n\r\n    if (isFinish) (0,_setNewScore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(score)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showScore);\n\n//# sourceURL=webpack:///./js/modules/game/showScore.js?");

/***/ }),

/***/ "./js/modules/game/showScoreWindow.js":
/*!********************************************!*\
  !*** ./js/modules/game/showScoreWindow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showScoreWindow = () => {\r\n    const game = document.querySelector('.game');\r\n    const scoreWindow = document.querySelector('.game__end');\r\n\r\n    if (game) {\r\n        scoreWindow.classList.add('game__end-active');\r\n        game.classList.add('game__finish');\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showScoreWindow);\n\n//# sourceURL=webpack:///./js/modules/game/showScoreWindow.js?");

/***/ }),

/***/ "./js/modules/game/showUserName.js":
/*!*****************************************!*\
  !*** ./js/modules/game/showUserName.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getUser */ \"./js/modules/command/getUser.js\");\n\r\n\r\nconst showUserName = () => {\r\n    let nameBlock = document.querySelector('.game__username');\r\n    let activeUser = (0,_command_getUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    if (nameBlock) nameBlock.textContent = 'Have a fun, ' + activeUser.name\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showUserName);\n\n//# sourceURL=webpack:///./js/modules/game/showUserName.js?");

/***/ }),

/***/ "./js/modules/game/timerAttack.js":
/*!****************************************!*\
  !*** ./js/modules/game/timerAttack.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setNewScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setNewScore */ \"./js/modules/game/setNewScore.js\");\n/* harmony import */ var _showScoreWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScoreWindow */ \"./js/modules/game/showScoreWindow.js\");\n\r\n\r\n\r\nconst timerAttack = (time) => {\r\n    const minute = document.querySelector('.game__min')\r\n    const twice = document.querySelector('.game__t')\r\n    const second = document.querySelector('.game__second')\r\n\r\n    const minuteNum = Math.floor(time / 60)\r\n    const secondNum = time % 60\r\n\r\n    if (minute) {\r\n        minute.textContent = minuteNum\r\n        twice.textContent = ':'\r\n        second.textContent = String(secondNum).padStart(2, '0');\r\n\r\n\r\n        if (time >= 1) {\r\n            setTimeout(() => {\r\n                timerAttack(time - 1)\r\n            }, 1000);\r\n        } else {\r\n            const scoreBlock = document.querySelector('.score__count');\r\n            (0,_showScoreWindow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n            ;(0,_setNewScore__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scoreBlock.textContent)\r\n            const gameResult = document.querySelector('.game__result')\r\n            gameResult.disabled = true\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerAttack);\n\n//# sourceURL=webpack:///./js/modules/game/timerAttack.js?");

/***/ }),

/***/ "./js/modules/leaderBoard/index.js":
/*!*****************************************!*\
  !*** ./js/modules/leaderBoard/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showUserScore\": () => (/* reexport safe */ _showUsersScore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"toggleMode\": () => (/* reexport safe */ _toggleMode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _showUsersScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showUsersScore */ \"./js/modules/leaderBoard/showUsersScore.js\");\n/* harmony import */ var _toggleMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleMode */ \"./js/modules/leaderBoard/toggleMode.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/leaderBoard/index.js?");

/***/ }),

/***/ "./js/modules/leaderBoard/putInOrder.js":
/*!**********************************************!*\
  !*** ./js/modules/leaderBoard/putInOrder.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction putInOrder(arr, elem) {\r\n    return arr.sort((a, b) => {\r\n        if (a[elem] > b[elem]) {\r\n            return -1\r\n\r\n        } else if (b[elem] > a[elem]) {\r\n            return 1\r\n        }\r\n        return 0\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putInOrder);\n\n//# sourceURL=webpack:///./js/modules/leaderBoard/putInOrder.js?");

/***/ }),

/***/ "./js/modules/leaderBoard/showUsersScore.js":
/*!**************************************************!*\
  !*** ./js/modules/leaderBoard/showUsersScore.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _putInOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./putInOrder */ \"./js/modules/leaderBoard/putInOrder.js\");\n/* harmony import */ var _command_getMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../command/getMode */ \"./js/modules/command/getMode.js\");\n/* harmony import */ var _command_getAllUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../command/getAllUsers */ \"./js/modules/command/getAllUsers.js\");\n\r\n\r\n\r\nconst showUserScore = (mode) => {\r\n    let users = (0,_command_getAllUsers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    let actualMode = (0,_command_getMode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    let usersInOrder = (0,_putInOrder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(users, mode || actualMode)\r\n\r\n    let table = document.querySelector('.score__users');\r\n    if (table) {\r\n        table.textContent = ''\r\n\r\n        for (let user of usersInOrder) {\r\n            let block = document.createElement('div')\r\n            let name = document.createElement('div')\r\n            let point = document.createElement('div')\r\n\r\n            block.classList.add('score__item')\r\n            name.classList.add('score__name')\r\n            point.classList.add('score__point')\r\n\r\n            name.textContent = user.name\r\n            point.textContent = user[mode || actualMode]\r\n\r\n            block.append(name, point)\r\n            table.append(block)\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showUserScore);\n\n//# sourceURL=webpack:///./js/modules/leaderBoard/showUsersScore.js?");

/***/ }),

/***/ "./js/modules/leaderBoard/toggleMode.js":
/*!**********************************************!*\
  !*** ./js/modules/leaderBoard/toggleMode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getMode */ \"./js/modules/command/getMode.js\");\n/* harmony import */ var _showUsersScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUsersScore */ \"./js/modules/leaderBoard/showUsersScore.js\");\n\r\n\r\n\r\nconst toggleMode = () => {\r\n    const modes = document.querySelectorAll('.score__radio')\r\n    const actualMode = (0,_command_getMode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    modes.forEach(elem => {\r\n        if (elem.id === actualMode) elem.checked = true\r\n\r\n        elem.addEventListener('click', () => {\r\n            ;(0,_showUsersScore__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elem.id);\r\n            localStorage.setItem('mode', elem.id);\r\n        });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMode);\n\n//# sourceURL=webpack:///./js/modules/leaderBoard/toggleMode.js?");

/***/ }),

/***/ "./js/modules/startPage/index.js":
/*!***************************************!*\
  !*** ./js/modules/startPage/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setActualUser\": () => (/* reexport safe */ _setActualUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"setMode\": () => (/* reexport safe */ _setMode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"toggleRules\": () => (/* reexport safe */ _toggleRules__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"validation\": () => (/* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _setMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setMode */ \"./js/modules/startPage/setMode.js\");\n/* harmony import */ var _setActualUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setActualUser */ \"./js/modules/startPage/setActualUser.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ \"./js/modules/startPage/validation.js\");\n/* harmony import */ var _toggleRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleRules */ \"./js/modules/startPage/toggleRules.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/startPage/index.js?");

/***/ }),

/***/ "./js/modules/startPage/setActualUser.js":
/*!***********************************************!*\
  !*** ./js/modules/startPage/setActualUser.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setActualUser() {\r\n    const btn = document.querySelector('.start__game');\r\n    const username = document.querySelector('.start__name');\r\n\r\n    btn?.addEventListener('click', function () {\r\n        localStorage.setItem('activeUser', username.value);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setActualUser);\n\n//# sourceURL=webpack:///./js/modules/startPage/setActualUser.js?");

/***/ }),

/***/ "./js/modules/startPage/setMode.js":
/*!*****************************************!*\
  !*** ./js/modules/startPage/setMode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _command_getMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command/getMode */ \"./js/modules/command/getMode.js\");\n\r\n\r\nconst setMode = () => {\r\n    const modes = document.querySelectorAll('.start__radio');\r\n\r\n    modes.forEach(el => {\r\n        if (el.checked) {\r\n            localStorage.setItem('mode', el.id)\r\n        }\r\n    })\r\n\r\n    modes.forEach(el => {\r\n        el.addEventListener('click', () => {\r\n            localStorage.setItem('mode', el.id)\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMode);\n\n//# sourceURL=webpack:///./js/modules/startPage/setMode.js?");

/***/ }),

/***/ "./js/modules/startPage/toggleRules.js":
/*!*********************************************!*\
  !*** ./js/modules/startPage/toggleRules.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleRules = () => {\r\n    const rules = document.querySelector('.start__rules-texts');\r\n    const btn = document.querySelector('.start__rules');\r\n\r\n    btn?.addEventListener('click', (e) => {\r\n        rules.classList.toggle('start__rules-passive')\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleRules);\n\n//# sourceURL=webpack:///./js/modules/startPage/toggleRules.js?");

/***/ }),

/***/ "./js/modules/startPage/validation.js":
/*!********************************************!*\
  !*** ./js/modules/startPage/validation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validationName(name, errorText) {\r\n    if (name.value <= 0) {\r\n        errorText.textContent = '* это поле обязательно';\r\n        return false\r\n    } else {\r\n        errorText.textContent = '';\r\n        return true\r\n    }\r\n}\r\n\r\nfunction validation() {\r\n    const nickname = document.querySelector('.start__name');\r\n    const errorTextName = document.querySelector('.errorText');\r\n    const btnStart = document.querySelector('.start__a');\r\n\r\n    btnStart?.addEventListener('click', () => {\r\n        if (validationName(nickname, errorTextName)) {\r\n            btnStart.href = 'game.html'\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./js/modules/startPage/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/bundle.js");
/******/ 	
/******/ })()
;