package us.cryptomaven.utils.blockchain;

import java.util.ArrayList;


public class BlockChainApp {

    ArrayList<Block> blockchain = new ArrayList<>();
    public static Block startBlock() {
        String[] genesisTransactions = {"Thomas owns 200 BTC", "Lisa sent Thomas 1 BTC"};
        Block genesisBlock = new Block(0,genesisTransactions);

        String[] blockchain2Trans = {"Thomas owns 200 BTC", "Lisa sent Thomas 1 BTC"};
        Block block2 = new Block (genesisBlock.getBlockHash(),blockchain2Trans );

        System.out.println("Hash of Genesis Block: ");
        System.out.println(genesisBlock.getBlockHash());
        System.out.println("Hash of Block 2: ");
        System.out.println(block2.getBlockHash());

        return block2;
    }

}
