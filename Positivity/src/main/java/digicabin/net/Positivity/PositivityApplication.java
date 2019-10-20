package digicabin.net.Positivity;

import digicabin.net.Positivity.Message.Message;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PositivityApplication {



	public static void main(String[] args) {
		Message message = new Message();

		message.setId(1);
		message.setMessage("Miko on ihana");
		message.setDate("2019--10-19");

		System.out.println(message.toString());

		SpringApplication.run(PositivityApplication.class, args);
	}

}
