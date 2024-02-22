class Project {
    constructor(title, description, liveLink){
        this.title = title,
        this.description = description,
        this.liveLink = liveLink
    }
}

// string, number, boolean, array, object, function
const projectData = [
    new Project("Handlebars", "it was a group project", "wwww.google.com"),
    new Project("React", "Description of portfolio", "www.github.com")

]

export default projectData