/**
 * 
 */
package net.mavencrypto.random;


/**
 * @author thomasMilton
 *
 */
public interface RandomGenerator
{

    String name();

    GeneratedRandomIdentifier generate();

}
