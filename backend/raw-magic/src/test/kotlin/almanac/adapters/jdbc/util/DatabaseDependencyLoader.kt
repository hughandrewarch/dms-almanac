package almanac.adapters.jdbc.util

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles(profiles = ["test"])
@SpringBootApplication
open class DatabaseDependencyLoader {
    companion object {

        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(DatabaseDependencyLoader::class.java, *args)
        }
    }
}
