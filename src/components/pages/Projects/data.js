class Project {
    constructor(title, description, liveLink){
        this.title = title,
        this.description = description,
        this.liveLink = liveLink
    }
}

// string, number, boolean, array, object, function
const projectData = [
    new Project("Module 1 Challenge:", "Edited starter code to render accurately.", "https://devinshade.github.io/mod-1-challenge/"),
    new Project("Project 2: Dad Joke Weather Dashboard", "Worked with a team to create a weather dashboard that displays dad jokes!", "https://devinshade.github.io/Dadhumor-Incorporated/"),
    new Project("Project 3: Lovestruck", "Wedding Site", "https://lovestruck.onrender.com")

]

export default projectData