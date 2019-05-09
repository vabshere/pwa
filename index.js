var state = 0
var start = document.getElementById('start')
var questions = document.getElementById('questions')
var finish = document.getElementById('finish')

checkState(state)

function checkState (state) {
  if (state === 0) {
    console.log(state)
    document.getElementById('start').style.display = 'initial'
    document.getElementById('questions').style.display = 'none'
    document.getElementById('finish').style.display = 'none'
  } else if (state === 1) {
    document.getElementById('start').style.display = 'none'
    document.getElementById('questions').style.display = 'initial'
    document.getElementById('finish').style.display = 'none'
  } else if (state === 2) {
    document.getElementById('start').style.display = 'none'
    document.getElementById('questions').style.display = 'none'
    document.getElementById('finish').style.display = 'initial'
  }
}

// function httpGet (url) {
//   var xmlHttp = new XMLHttpRequest()
//   xmlHttp.open('GET', url, false) // false for synchronous request
//   xmlHttp.send(null)
//   return xmlHttp.responseText
// }

var queryString = window.location.search.slice(1)
var obj = {}
if (queryString) {
  queryString = queryString.split('#')[0]
  var arr = queryString.split('&')
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=')
    var paramName = a[0]
    var paramValue = typeof a[1] === 'undefined' ? true : a[1]
    paramName = paramName.toLowerCase()
    if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase()

    if (paramName.match(/\[(\d+)?\]$/)) {
      var key = paramName.replace(/\[(\d+)?\]/, '')
      if (!obj[key]) obj[key] = []

      if (paramName.match(/\[\d+\]$/)) {
        var index = /\[(\d+)\]/.exec(paramName)[1]
        obj[key][index] = paramValue
      } else {
        obj[key].push(paramValue)
      }
    } else {
      if (!obj[paramName]) {
        obj[paramName] = paramValue
      } else if (obj[paramName] && typeof obj[paramName] === 'string') {
        obj[paramName] = [obj[paramName]]
        obj[paramName].push(paramValue)
      } else {
        obj[paramName].push(paramValue)
      }
    }
  }
}

var hashString = window.location.hash.slice(1)
var obj1 = {}
if (hashString) {
  var arr = hashString.split('&')
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=')
    var paramName = a[0]
    var paramValue = typeof a[1] === 'undefined' ? true : a[1]
    paramName = paramName.toLowerCase()
    if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase()

    if (paramName.match(/\[(\d+)?\]$/)) {
      var key = paramName.replace(/\[(\d+)?\]/, '')
      if (!obj1[key]) obj1[key] = []

      if (paramName.match(/\[\d+\]$/)) {
        var index = /\[(\d+)\]/.exec(paramName)[1]
        obj1[key][index] = paramValue
      } else {
        obj1[key].push(paramValue)
      }
    } else {
      if (!obj1[paramName]) {
        obj1[paramName] = paramValue
      } else if (obj1[paramName] && typeof obj1[paramName] === 'string') {
        obj1[paramName] = [obj1[paramName]]
        obj1[paramName].push(paramValue)
      } else {
        obj1[paramName].push(paramValue)
      }
    }
  }
}

console.log(obj1, obj)

document.getElementById('name').innerHTML = obj.name

function startQ () {
  state = 1
  window.location.hash = 'question=0&ans=0'
  checkState(state)
  name = 'ha'
}

var questions = [
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique. Et magnis dis parturient montes nascetur ridiculus. Cursus turpis massa tincidunt dui ut ornare lectus. ',
    options: [
      'Mattis nunc sed blandit ',
      'Tristique sollicitudin nibh sit',
      'Luctus venenatis lectus magna',
      'Etiam dignissim diam'
    ]
  },
  {
    question:
      'Convallis convallis tellus id interdum velit laoreet id. Lorem sed risus ultricies tristique nulla aliquet enim tortor at',
    options: [
      'Dictumst vestibulum rhoncus est ',
      'Viverra accumsan in nisl',
      'Pellentesque pulvinar pellentesque habitan',
      'Fames ac turpis'
    ]
  },
  {
    question:
      'Convallis convallis tellus id interdum velit laoreet id. Lorem sed risus ultricies tristique nulla aliquet enim tortor at',
    options: [
      'Dictumst vestibulum rhoncus est ',
      'Viverra accumsan in nisl',
      'Pellentesque pulvinar pellentesque habitan',
      'Fames ac turpis'
    ]
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique. Et magnis dis parturient montes nascetur ridiculus. Cursus turpis massa tincidunt dui ut ornare lectus. ',
    options: [
      'Mattis nunc sed blandit ',
      'Tristique sollicitudin nibh sit',
      'Luctus venenatis lectus magna',
      'Etiam dignissim diam'
    ]
  },
  {
    question:
      'Convallis convallis tellus id interdum velit laoreet id. Lorem sed risus ultricies tristique nulla aliquet enim tortor at',
    options: [
      'Dictumst vestibulum rhoncus est ',
      'Viverra accumsan in nisl',
      'Pellentesque pulvinar pellentesque habitan',
      'Fames ac turpis'
    ]
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique. Et magnis dis parturient montes nascetur ridiculus. Cursus turpis massa tincidunt dui ut ornare lectus. ',
    options: [
      'Mattis nunc sed blandit ',
      'Tristique sollicitudin nibh sit',
      'Luctus venenatis lectus magna',
      'Etiam dignissim diam'
    ]
  }
]

var length = questions.length
var i = 0
var responses = new Array(length)
var numOptions = 4
var question = document.getElementById('question')
var nextDom = document.getElementById('next')
var previousDom = document.getElementById('previous')
var submitDom = document.getElementById('submit')
var ans
var num = document.getElementById('num')

num.innerHTML = 1
document.getElementById('length').innerHTML = length

question.innerHTML = questions[i].question

previousDom.style.display = 'none'
submitDom.style.display = 'none'

changeOptions(0)

function next () {
  if (i === 0) previousDom.style.display = 'initial'
  if (i === length - 1) return
  if (i === length - 2) {
    ;(nextDom.style.display = 'none'), (submitDom.style.display = 'initial')
  }
  question.innerHTML = questions[++i].question
  num.innerHTML = i + 1
  clearSelect()
  changeOptions(i)
  saveResponses(i - 1, i)
}

function previous () {
  console.log(questions)
  if (i === 0) return
  if (i === 1) previousDom.style.display = 'none'
  if (i === length - 1) {
    ;(nextDom.style.display = 'initial'), (submitDom.style.display = 'none')
  }
  question.innerHTML = questions[--i].question
  num.innerHTML = i + 1
  clearSelect()

  changeOptions(i)
  saveResponses(i + 1, i)
}

function changeOptions (i) {
  for (let t = 1; t <= numOptions; t++) {
    document.getElementById('option' + t + 'Val').innerHTML =
      questions[i].options[t - 1]
    checkIfFilled(i)
  }
  cl = ''
}

function checkIfFilled (i) {
  if (!isNaN(responses[i])) {
    document.getElementById('option' + responses[i]).checked = true
  }
}

function saveResponses (i, qNum) {
  if (!document.querySelector('input[name = "option"]:checked')) {
    ans = ''
    for (let m of responses) {
      if (m) ans += m
      else ans += '6'
    }
    window.location.hash = 'question=' + qNum + '&ans=' + ans
    return
  }
  var gender = document.querySelector('input[name = "option"]:checked').value
  if (gender) responses[i] = gender
  ++gender
  document.getElementById('option' + gender).checked = false
  ans = ''
  for (let m of responses) {
    if (m) ans += m
    else ans += '6'
  }
  window.location.hash = 'question=' + qNum + '&ans=' + ans
  console.log(ans)
}

function submit () {
  state = 2
  checkState(state)
}

if (!isNaN(obj1.question)) {
  state = 1
  checkState(state)
  // console.log()
  for (let m = 0; m < obj1.question; m++) {
    next()
  }
}

if (!isNaN(obj1.state)) {
  if (obj1.state == '2') {
    checkState(2)
    document.getElementById('score').innerHTML = obj1.score + '/' +length
  }
}

var ansArr = [0, 1, 4, 2, 3, 4]

function submit () {
  saveResponses(length - 1, length)
  let counter = 0
  for (let [ind, value] of ans.split('').entries()) {
    if (ansArr[ind] == parseInt(value)) counter++
  }
  state = 2
  checkState(state)
  document.getElementById('score').innerHTML = counter + '/' + length
  window.location.hash = 'state=2&score=' + counter
}

var cl = ''
function switchRadio (ref) {
  document.getElementById(ref.children[0].id).checked = true
  clearSelect()
  cl = ref.className
  ref.className += ' select'
  console.log(cl)
}

function clearSelect () {
  if (cl) document.getElementsByClassName('radio select')[0].className = 'radio'
}
