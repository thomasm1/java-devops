//package us.cryptomaven.ctrl.restControllers;
//
//import com.intuit.karate.Results;
//import com.intuit.karate.Runner;
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class RestControllerTest {
//
//    @Test
//    void testParallel() {
//        Results results = Runner.path("classpath:us.cryptomaven.ctrl.restControllers")
//                .tags("~@ignore")
//                //.outputCucumberJson(true)
//                .parallel(5);
//        assertEquals(0, results.getFailCount(), results.getErrorMessages());
//    }
//
//}
