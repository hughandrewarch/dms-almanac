package almanac.ports.persistence

import almanac.exceptions.RelationTypeNotFoundException
import almanac.models.Relation
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class RelationRepositoryContractTest {
    private lateinit var subject: RelationRepository
    private lateinit var relationTypeRepository: RelationTypeRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
        relationTypeRepository = buildRelationTypeRepository()
    }

    abstract fun buildSubject(): RelationRepository
    abstract fun buildRelationTypeRepository(): RelationTypeRepository

    @Test
    fun `create should throw exception when relation does not exist`() {
        Assertions.assertThatThrownBy {
            subject.create(101L, 201L, 301L)
        }
            .isInstanceOf(RelationTypeNotFoundException::class.java)
            .hasMessageContaining("<301>")
    }

    @Test
    fun `create returns true on successfull creation`() {
        val relationType = relationTypeRepository.create("name")

        val createdRelation = subject.create(101L, 201L, relationType.id)

        assertThat(createdRelation).isEqualTo(Relation(101L, 201L, relationType))
    }

    @Test
    fun findAll() {
        val relationType = relationTypeRepository.create("name")

        subject.create(101L, 201L, relationType.id)
        subject.create(102L, 201L, relationType.id)

        val relations = subject.findAll()

        assertThat(relations).containsExactlyInAnyOrder(
            Relation(101L, 201L, relationType),
            Relation(102L, 201L, relationType)
        )
    }
}
