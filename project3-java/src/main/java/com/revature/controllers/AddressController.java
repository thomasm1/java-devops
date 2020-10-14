package com.revature.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;

//import com.google.api.client.http.HttpResponse;
import io.swagger.annotations.Api;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
//import org.json.simple.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

/**
 * AddressController takes care of handling requests to /address.
 * It provides methods that can perform tasks like returning latitude/longitudes, given an address;
 * Calculations of distances server-side based on different locations is primary objective!
 *
 * @author Thomas Maestas
 *
 */

@RestController
@RequestMapping("/address")
@CrossOrigin
@Api(tags= {"Address"})
public class AddressController {
    public static double latitude;
    private static String GOOGLE_APIKEY = System.getenv("googleMapAPIKey");

    /**
     * HTTP POST method (/address)
     *
     * @param address represents the new Address being sent.
     *                {
     * "city":"Pittsburgh",
     * "state":"Pennsylvania",
     * "country":"United States",
     * "zipcode":15220
     * }
     * @return A address (currently just latitude.
     */
    @PostMapping(value = "/address", consumes = "application/json")
    public String getLat(@RequestBody String address) {

        JSONObject jsonObject = getLocationInfo(address);
        String lat = Double.toString(getLatLong(jsonObject));
        return lat;
    }

    // SOON putting to SERVICE
    public static JSONObject getLocationInfo(String address) {
        StringBuilder stringBuilder = new StringBuilder();
        try {

            address = address.replaceAll(" ", "%20");

            HttpPost httppost = new HttpPost("https://maps.google.com/maps/api/geocode/json?address="
                    + URLEncoder.encode(address) + "&sensor=false&key=" + GOOGLE_APIKEY);
            HttpClient client = new DefaultHttpClient();
            HttpResponse response;
            stringBuilder = new StringBuilder();

            response = client.execute(httppost);
            HttpEntity entity = (HttpEntity) response.getEntity();
            InputStream stream = ((org.apache.http.HttpEntity) entity).getContent();
            int b;
            while ((b = stream.read()) != -1) {
                stringBuilder.append((char) b);
            }
        } catch (ClientProtocolException e) {

            e.printStackTrace();
        } catch (IOException e) {

            e.printStackTrace();
        }

        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject = new JSONObject(stringBuilder.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return jsonObject;
    }

    public static double getLatLong(JSONObject jsonObject) {
        try {
            latitude = ((JSONArray) jsonObject.get("results"))
                    .getJSONObject(0)
                    .getJSONObject("geometry")
                    .getJSONObject("location")
                    .getDouble("lat");
        } catch (JSONException e) {
            System.out.println(e);
            return 0.0;
        }
        return latitude;
    }
}
