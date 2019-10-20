package digicabin.net.Positivity.DAO;

import digicabin.net.Positivity.Message.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MessageDAO extends CrudRepository<Message, Long> {

}
