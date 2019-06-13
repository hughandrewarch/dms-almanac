package weave.domain.ports.spi

import com.api.weave.domain.ports.spi.base.BaseRepository
import com.api.weave.domain.models.Person
import com.api.weave.domain.models.PersonRelationType

interface PersonRepository: BaseRepository<Person> {
    fun findAll(relation: PersonRelationType, relatedId: Long): List<Person>
}