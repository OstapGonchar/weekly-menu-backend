package com.ostap.weekly.weeklymenu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class WeekRepositoryImpl implements WeekRepository {
  private DataSource dataSource;

  @Autowired
  public WeekRepositoryImpl(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  @Override
  public Week getCurrentWeek() {
    return null;
  }

  @Override
  public Week getWeek(int id) {
    return null;
  }

  @Override
  public List<WeekDesc> getAllWeekDesc() {
    ArrayList<WeekDesc> weekDescList = new ArrayList<>();
    try (Connection connection =dataSource.getConnection()) {
      PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM WEEK");
      ResultSet resultSet = preparedStatement.executeQuery();
      while (resultSet.next()) {
        weekDescList.add(new WeekDesc(resultSet.getInt("1"), resultSet.getString("2")));
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
    return weekDescList;
  }

  @Override
  public void updateWeek(Week week) {

  }

  @Override
  public void addOneMoreWeek() {
    LocalDate currentDate = LocalDate.now();

  }
}
