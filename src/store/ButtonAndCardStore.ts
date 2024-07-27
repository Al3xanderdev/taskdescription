import { createEvent, createStore, createEffect, combine } from "effector";

const mockCard = {
  personName: "Дмитрий Сергеевич Иванов",
  personStatus: "Раб",
  name: "Жилой дом",
  date: "02.02.2022",
  priority: "Обычный",
  priorityNum: 2,
  id: "0",
  progress: 0,
  respPeople: ["John ", "Bob "],
  status: "Завершён",
};

const mockCard1 = {
  personName: "Иван Сергеевич Сергеев",
  personStatus: "Мастер",
  name: "Школа",
  date: "01.01.2021",
  priority: "Низкий",
  priorityNum: 1,
  id: "0",
  progress: 25,
  respPeople: ["John ", "Bob "],
  status: "В работе",
};

const mockCard2 = {
  personName: "Сергей Иванович Дмитриев",
  personStatus: "Раб",
  name: "Больница",
  date: "03.03.2023",
  priority: "Высокий",
  priorityNum: 3,
  id: "0",
  progress: 50,
  respPeople: ["John ", "Bob "],
  status: "Создан",
};

const mockCard3 = {
  personName: "Дмитрий Сергеевич Иванов",
  personStatus: "Мастер",
  name: "Больница",
  date: "04.04.2024",
  priority: "Обычный",
  priorityNum: 3,
  id: "0",
  progress: 100,
  respPeople: ["John ", "Bob "],
  status: "В работе",
};

const mockCard4 = {
  personName: "Дмитрий Иваноивич Сергеев",
  personStatus: "Раб",
  name: "Больница",
  date: "04.04.2024",
  priority: "Низкий",
  priorityNum: 3,
  id: "0",
  progress: 100,
  respPeople: ["John ", "Bob "],
  status: "В работе",
};

export const $cards = createStore([...Array(2).fill(mockCard),
                                   ...Array(2).fill(mockCard1),
                                   ...Array(2).fill(mockCard3),
                                   ...Array(2).fill(mockCard4),
                                   ...Array(2).fill(mockCard2)])

// фильтрация по поиску

export const searchCards = createEffect((searchKey: string) => searchKey)

export const $searchfilteredCards = createStore($cards.getState())

$searchfilteredCards.on(searchCards.doneData, (_, searchKey) => {
  const allCards = $cards.getState() 
  // console.log(allCards);
  return allCards.filter((card) => 
    card.personName.toUpperCase().includes(searchKey.toUpperCase()))
})

// 

// фильтрация по статусу

export const $statusFilteredCards = createStore($searchfilteredCards.getState())

export const changeStatus = createEffect((status: string) => status)

$statusFilteredCards.on(changeStatus.doneData, (_, status) => {
  // const cards = $searchfilteredCards.getState()
  const cards = $cards.getState()

  console.log(status)

  if (status === "Все")
    return cards

  return cards.filter((card) => 
    card.personStatus.toUpperCase().includes(status.toUpperCase()))
})

// 

// фильтрация по приоритету

export const $priorityFilteredCards = createStore($searchfilteredCards.getState())

export const changePriority = createEffect((priority: string) => priority)

$priorityFilteredCards.on(changePriority.doneData, (_, priority) => {
  // const cards = $searchfilteredCards.getState()
  const cards = $cards.getState()

  console.log(priority)

  if (priority === "Все")
    return cards

  return cards.filter((card) => 
    card.priority.toUpperCase().includes(priority.toUpperCase()))
})

// 

export const $fromMinToMax = createStore("date_straight")
export const changeSortMethodPr = createEvent()
export const changeSortMethodDt = createEvent()

$fromMinToMax.on(changeSortMethodPr, (prevState) => {
  // console.log("prio change")
  let order = prevState.split("_")[1]
  if (order === "straight") order = "reversed"
  else order = "straight"
  // console.log("priority_" + order)
  return "priority_" + order
})

$fromMinToMax.on(changeSortMethodDt, (prevState) => {
  console.log("date change")
  let order = prevState.split("_")[1]
  if (order === "straight") order = "reversed"
  else order = "straight"
  // console.log("date_" + order)
  return "date_" + order
})

// объединение всех трех отфильтрованных

export const $tempCards = combine($searchfilteredCards, $statusFilteredCards, (first, second) => {
  return first.filter(item => second.includes(item));
});

export const $filteredCards = combine($tempCards, $priorityFilteredCards, (first, second) => {
  return first.filter(item => second.includes(item));
});

//

export const $displayedCards = combine($filteredCards, $fromMinToMax, (cards, filter) => {
  const cards_copy = [...cards]
  const type = filter.split("_")[0]
  const order = filter.split("_")[1]
  // console.log(filter)
  
  if (type === "priority") {
    if (order === "straight")
      cards_copy.sort((a, b) => {
        return a.priorityNum - b.priorityNum
      })
    else 
      cards_copy.sort((a, b) => {
        return b.priorityNum - a.priorityNum
      })
    return cards_copy
  }

  else {
    if (order === "straight") {
      cards_copy.sort((a, b) => {
        const dateA = a.date.split('.').reverse().join('')
        const dateB = b.date.split('.').reverse().join('')
        return dateA.localeCompare(dateB)
      })
      return cards_copy
    }

    else {
      cards_copy.sort((b, a) => {
        const dateA = a.date.split('.').reverse().join('')
        const dateB = b.date.split('.').reverse().join('')
        return dateA.localeCompare(dateB)
      })
      return cards_copy
    }
  }
})
