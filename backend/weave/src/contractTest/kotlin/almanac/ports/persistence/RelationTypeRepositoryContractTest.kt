package almanac.ports.persistence

import almanac.exceptions.RelationTypeAlreadyExistsException
import almanac.exceptions.RelationTypeNotFoundException
import almanac.models.RelationType
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

abstract class RelationTypeRepositoryContractTest {
    private lateinit var subject: RelationTypeRepository

    @BeforeEach
    fun setUp() {
        subject = buildSubject()
    }

    abstract fun buildSubject(): RelationTypeRepository


    @Test
    fun `create returns the relation type`() {
        val createdRelationType = subject.create("SettlementPerson")

        assertThat(createdRelationType)
            .isEqualToIgnoringGivenFields(
                RelationType(
                    -1,
                    "SettlementPerson")
                , "id")
    }

    @Test
    fun `create should throw exception when relation already exists`() {
        subject.create("SettlementPerson")

        Assertions.assertThatThrownBy {
            subject.create("SettlementPerson")
        }
            .isInstanceOf(RelationTypeAlreadyExistsException::class.java)
            .hasMessageContaining("Relation Type <SettlementPerson> already exists")
    }

    @Test
    fun `find throws RelationTypeNotFoundException when RelationType is not found`() {
        Assertions.assertThatThrownBy {
            subject.find(1L)
        }
            .isInstanceOf(RelationTypeNotFoundException::class.java)
            .hasMessageContaining("No relationType found with id <1>")
    }

    @Test
    fun `find returns a RelationType`() {
        val createdRelationType = subject.create("name")

        val relationType = subject.find(createdRelationType.id)

        assertThat(relationType).isEqualTo(
            RelationType(id = createdRelationType.id,
                name = "name")
        )
    }

    @Test
    fun findAll() {
        val relation1 = subject.create("SettlementPerson")
        val relation2 = subject.create("SettlementPlace")

        val relations = subject.findAll()

        assertThat(relations).containsExactlyInAnyOrder(
            RelationType(relation1.id, "SettlementPerson"),
            RelationType(relation2.id, "SettlementPlace")
        )
    }
}
