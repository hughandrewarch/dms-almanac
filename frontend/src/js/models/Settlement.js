export default function Settlement(name, description, population) {
    this.name = name
    this.description = description
    this.population = population || 0
    this.type = "TOWN"
}