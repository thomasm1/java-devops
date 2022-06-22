package util;


// Hash Table using Linear Probing for Collisions
public class DataHashtable {

	private StoredUser[] hashtable;
	
	public DataHashtable() {
		hashtable = new StoredUser[1000];
	}
	
	private int hashKey(String key) {
		return (int) (key.length() * Math.random()*31) % hashtable.length; //randomNum = minimum + (int)(Math.random() * maximum);
	}
	
	
	/// private findKey(String key)
	
	//public void put(String key, User user) {
	// public User get(String key)
	// public User remove(String key)
	
}
