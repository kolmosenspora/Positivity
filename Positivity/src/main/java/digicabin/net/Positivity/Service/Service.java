package digicabin.net.Positivity.Service;


import digicabin.net.Positivity.DAO.MessageDAO;
import digicabin.net.Positivity.Message.Message;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {



    private final MessageDAO repository;

    @Autowired
    public Service(MessageDAO repository) {
        this.repository = repository;
    }


    public Message add(Message message) {
        return repository.save(message);

    }

    public Iterable<Message> getAll() {
     return repository.findAll();
    }


}