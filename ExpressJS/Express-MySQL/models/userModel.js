const db = require("../config/database");

class User {
  static async create(name, email, password) {
    try {
      const [result] = await db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
      );
      return result.insertId;
    } catch (err) {
      console.error("Error creating user: ", err);
      throw err;
    }
  }

  static async findAll() {
    try {
      const [rows] = await db.query("SELECT * FROM users");
      return rows;
    } catch (err) {
      console.error("Error fetching user: ", err);
      throw err;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      return rows[0];
    } catch (err) {
      console.error("Error finding user by ID: ", err);
      throw err;
    }
  }

  static async update(id, name, email, photo) {
    try {
      if (photo) {
        await db.query(
          "UPDATE users SET name = ?, email = ?, photo = ? WHERE id = ?",
          [name, email, photo, id]
        );
      } else {
        await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
          name,
          email,
          id,
        ]);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      await db.query("DELETE FROM users WHERE id = ?", [id]);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

module.exports = User;
