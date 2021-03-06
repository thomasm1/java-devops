package com.revature.daos;

import java.util.List;

//import javax.transaction.SystemException;  BAD !!!!!!!!!!!!!!!!!!
//import javax.transaction.Transaction; BAD !!!!!!!!!!!!!!!!!!

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.Flower;
import com.revature.util.HibernateUtil;

public class FlowerDAOImpl implements FlowerDAO {

	public int addFlower(Flower f) {
		Session sess = HibernateUtil.getSession();
		int id = 0;

		try {

			sess.beginTransaction();
			id = Integer.parseInt(sess.save(f).toString());
			sess.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			sess.getTransaction().rollback();
		} finally {
			sess.close();
		}

		return id;
	}

	public List<Flower> selectAllFlowers() {
		Session sess = HibernateUtil.getSession();
		List<Flower> flowers = null;
		try {
			flowers = sess.createQuery("FROM Flower").list();
		} catch (HibernateException e) {
			e.getStackTrace();
		} finally {
			sess.close();
		}
		return flowers;
	}

	public Flower selectFlowerById(int id) {
		Session sess = HibernateUtil.getSession();
		Flower flower = null;
		try {
			flower = (Flower) sess.get(Flower.class, id);
		} catch (HibernateException e) {
			e.getStackTrace();
		} finally {
			sess.close();
		}
		return flower;
		
	}

	public void updateFlower(Flower change) {
		Session sess = HibernateUtil.getSession();
		Transaction tx = null;
		try {
			tx = (Transaction) sess.beginTransaction();
			sess.update(change);
		} catch (HibernateException e) {
			e.getStackTrace();
			try {
				tx.rollback();
			} catch (IllegalStateException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (HibernateException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		} finally {
			sess.close();
		}
	}
 
	public void deleteFlowerById(int id) {
		Session sess = HibernateUtil.getSession();
		org.hibernate.Transaction tx = null;
		
		try {
			tx = sess.beginTransaction();
			sess.delete(sess.get(Flower.class, id));
			tx.commit();
		} catch (HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			sess.close();
		}
		
	}

}
