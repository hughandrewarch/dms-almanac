package ports.persistence.base

interface BaseRepository<T> {
    fun find(id: Long): T
    fun findAll(): List<T>
}