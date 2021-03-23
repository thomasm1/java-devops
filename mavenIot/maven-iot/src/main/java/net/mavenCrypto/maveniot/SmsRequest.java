package net.mavenCrypto.maveniot;

public interface SmsRequest {

    private final String phoneNumber; // dest
    private final String message;

    void sendSms(String phoneNumber, String message) {
        this.phoneNumber = phoneNumber;
        this.message = message;
    };

}