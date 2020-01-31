package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Bee {

	@Id
	@Column(name = "b_id", updatable = false)
	@SequenceGenerator(sequenceName = "bee_seq", name = "b_seq")
	// b_seq ->refer to in java
	// same name would reduce confusion
	@GeneratedValue(generator = "b_seq", strategy = GenerationType.SEQUENCE)
	private int id;

	@Column(name = "age", nullable = false)
	private int age;

	@ManyToOne
	@JoinColumn(name = "beehive", nullable = false)
	// with nullable false, beware calling no-arg constructor
	private Beehive beehive;

	@ManyToMany(fetch = FetchType.EAGER) // makes sense bc if you grab a flower, you dont
											// want every flower
	@JoinTable(name = "bee_flower_jt", joinColumns = @JoinColumn(name = "b_id"),
			// use flower.hbm.xml for col name f_id
			inverseJoinColumns = @JoinColumn(name = "f_id"))
	private List<Flower> flowers;

	public Bee() {
		super();
	}

	public Bee(int id, int age, Beehive beehive) {
		super();
		this.id = id;
		this.age = age;
		this.beehive = beehive;
	}

	public Bee(int age, Beehive beehive) {
		super();
		this.age = age;
		this.beehive = beehive;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Beehive getBeehive() {
		return beehive;
	}

	public void setBeehive(Beehive beehive) {
		this.beehive = beehive;
	}

	public List<Flower> getFlowers() {
		return flowers;
	}

	public void setFlowers(List<Flower> flowers) {
		// TODO Auto-generated method stub

	}
	@Override
	public String toString() {
		return "Bee [id=" + id + ", age=" + age + ", beehive=" + beehive + "]";
	}


}
