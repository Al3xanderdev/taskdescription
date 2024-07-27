import { createEvent, createStore, createEffect, combine } from "effector";

const mockProject = {
  name: "Жилой дом",
  date: "02.02.2023",
  priority: "Обычный",
  priorityNum: 2,
  id: "0",
};

const mockProject1 = {
  name: "Школа",
  date: "01.01.2021",
  priority: "Низкий",
  priorityNum: 1,
  id: "0",
};

const mockProject2 = {
  name: "Больница",
  date: "03.03.2020",
  priority: "Высокий",
  priorityNum: 3,
  id: "0",
};

const mockProject3 = {
  name: "Больница",
  date: "03.03.2021",
  priority: "Высокий",
  priorityNum: 3,
  id: "0",
};

export const $projects = createStore([...Array(6).fill(mockProject),
                                      ...Array(3).fill(mockProject1),
                                      ...Array(3).fill(mockProject3),
                                      ...Array(2).fill(mockProject2)])

export const searchProjects = createEffect((searchKey: string) => searchKey)

export const $filteredProjects = createStore($projects.getState())

$filteredProjects.on(searchProjects.doneData, (_, searchKey) => {
  const allProjects = $projects.getState() 
  // console.log(allProjects);
  return allProjects.filter((project) => 
    project.name.toUpperCase().includes(searchKey.toUpperCase()))
})

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

export const $displayedProjects = combine($filteredProjects, $fromMinToMax, (projects, filter) => {
  const projects_copy = [...projects]
  const type = filter.split("_")[0]
  const order = filter.split("_")[1]
  // console.log(filter)
  
  if (type === "priority") {
    if (order === "straight")
      projects_copy.sort((a, b) => {
        return a.priorityNum - b.priorityNum
      })
    else 
      projects_copy.sort((a, b) => {
        return b.priorityNum - a.priorityNum
      })
    return projects_copy
  }

  else {
    if (order === "straight") {
      projects_copy.sort((a, b) => {
        const dateA = a.date.split('.').reverse().join('')
        const dateB = b.date.split('.').reverse().join('')
        return dateA.localeCompare(dateB)
      })
      return projects_copy
    }

    else {
      projects_copy.sort((b, a) => {
        const dateA = a.date.split('.').reverse().join('')
        const dateB = b.date.split('.').reverse().join('')
        return dateA.localeCompare(dateB)
      })
      return projects_copy
    }
  }
})