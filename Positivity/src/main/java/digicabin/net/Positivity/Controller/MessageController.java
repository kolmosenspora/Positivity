package digicabin.net.Positivity.Controller;

import digicabin.net.Positivity.Message.Message;
import digicabin.net.Positivity.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/messages")
@RestController
public class MessageController {

    @Autowired
    private Service service;

    public MessageController(Service service) {
        this.service = service;
    }



    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public Message add(@RequestBody Message message) {
        return service.add(message);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Message> getAll() {
        return service.getAll();
    }


}

