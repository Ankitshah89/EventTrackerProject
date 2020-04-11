package com.skilldistillery.covid.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class Cases {
	//Fields

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String state;
	private Integer positive;
	private Integer negative;
	private Integer inIcu;
	private Integer onVentilator;
	private Integer recovered;
	private Integer death;
	private Integer hospitalized;
	private Integer totalTestResult;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Integer getPositive() {
		return positive;
	}
	public void setPositive(Integer positive) {
		this.positive = positive;
	}
	public Integer getNegative() {
		return negative;
	}
	public void setNegative(Integer negative) {
		this.negative = negative;
	}
	public Integer getInIcu() {
		return inIcu;
	}
	public void setInIcu(Integer inIcu) {
		this.inIcu = inIcu;
	}
	public Integer getOnVentilator() {
		return onVentilator;
	}
	public void setOnVentilator(Integer onVentilator) {
		this.onVentilator = onVentilator;
	}
	public Integer getRecovered() {
		return recovered;
	}
	public void setRecovered(Integer recovered) {
		this.recovered = recovered;
	}
	public Integer getDeath() {
		return death;
	}
	public void setDeath(Integer death) {
		this.death = death;
	}
	public Integer getHospitalized() {
		return hospitalized;
	}
	public void setHospitalized(Integer hospitalized) {
		this.hospitalized = hospitalized;
	}
	public Integer getTotalTestResult() {
		return totalTestResult;
	}
	public void setTotalTestResult(Integer totalTestResult) {
		this.totalTestResult = totalTestResult;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((death == null) ? 0 : death.hashCode());
		result = prime * result + ((hospitalized == null) ? 0 : hospitalized.hashCode());
		result = prime * result + id;
		result = prime * result + ((inIcu == null) ? 0 : inIcu.hashCode());
		result = prime * result + ((negative == null) ? 0 : negative.hashCode());
		result = prime * result + ((onVentilator == null) ? 0 : onVentilator.hashCode());
		result = prime * result + ((positive == null) ? 0 : positive.hashCode());
		result = prime * result + ((recovered == null) ? 0 : recovered.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		result = prime * result + ((totalTestResult == null) ? 0 : totalTestResult.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cases other = (Cases) obj;
		if (death == null) {
			if (other.death != null)
				return false;
		} else if (!death.equals(other.death))
			return false;
		if (hospitalized == null) {
			if (other.hospitalized != null)
				return false;
		} else if (!hospitalized.equals(other.hospitalized))
			return false;
		if (id != other.id)
			return false;
		if (inIcu == null) {
			if (other.inIcu != null)
				return false;
		} else if (!inIcu.equals(other.inIcu))
			return false;
		if (negative == null) {
			if (other.negative != null)
				return false;
		} else if (!negative.equals(other.negative))
			return false;
		if (onVentilator == null) {
			if (other.onVentilator != null)
				return false;
		} else if (!onVentilator.equals(other.onVentilator))
			return false;
		if (positive == null) {
			if (other.positive != null)
				return false;
		} else if (!positive.equals(other.positive))
			return false;
		if (recovered == null) {
			if (other.recovered != null)
				return false;
		} else if (!recovered.equals(other.recovered))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		if (totalTestResult == null) {
			if (other.totalTestResult != null)
				return false;
		} else if (!totalTestResult.equals(other.totalTestResult))
			return false;
		return true;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Case [id=");
		builder.append(id);
		builder.append(", state=");
		builder.append(state);
		builder.append(", positive=");
		builder.append(positive);
		builder.append(", negative=");
		builder.append(negative);
		builder.append(", inIcu=");
		builder.append(inIcu);
		builder.append(", onVentilator=");
		builder.append(onVentilator);
		builder.append(", recovered=");
		builder.append(recovered);
		builder.append(", death=");
		builder.append(death);
		builder.append(", hospitalized=");
		builder.append(hospitalized);
		builder.append(", totalTestResult=");
		builder.append(totalTestResult);
		builder.append("]");
		return builder.toString();
	}
	public Cases(int id, String state, Integer positive, Integer negative, Integer inIcu, Integer onVentilator,
			Integer recovered, Integer death, Integer hospitalized, Integer totalTestResult) {
		super();
		this.id = id;
		this.state = state;
		this.positive = positive;
		this.negative = negative;
		this.inIcu = inIcu;
		this.onVentilator = onVentilator;
		this.recovered = recovered;
		this.death = death;
		this.hospitalized = hospitalized;
		this.totalTestResult = totalTestResult;
	}
	public Cases() {
		super();
	}

	
	
	
	/////////////////////////////////
	
	
}