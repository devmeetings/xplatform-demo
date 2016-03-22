import java.util.Random;
import java.util.Arrays;
import java.util.List;

public class Main {

  public static int rand() {
    return new Random().nextInt();
  }
  
  public static void main() {
    final StringBuilder builder = new StringBuilder();
    
    // Java 8!
    List features = Arrays.asList("Lambds", "Default Method", "Stream API", "Date and Time API");
    features.forEach(n -> builder.append(n +  " "));
    
    System.out.println(builder.toString());
    System.out.println(rand());
  }
}
