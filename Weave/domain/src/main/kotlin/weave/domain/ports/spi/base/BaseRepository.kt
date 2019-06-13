package weave.domain.ports.spi.base

interface BaseRepository<T> {
    fun find(id: Long): T
    fun findAll(): List<T>
}