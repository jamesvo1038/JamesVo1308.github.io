package com.bookstore.models;

import java.io.Serializable;
import java.util.ArrayList;

public class Book implements Serializable {
	private String isbn;
	private String title;
        private String author;
	private String description;
	private String coverImageFile;
private byte[] image; 
	private String imageFileName;
	
	public Book(String isbn, String title, String author, String description, String coverImageFile) {
		this.isbn = isbn;
		this.title = title;
                this.author = author;
		this.description = description;
		this.coverImageFile = coverImageFile;
	}
	
	public Book() {
		this.isbn = "";
		this.title = "";
                this.author = "";
		this.description = "";
		this.coverImageFile = "";
	}

	public synchronized String getIsbn() {
		return isbn;
	}

	public synchronized void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public synchronized String getTitle() {
		return title;
	}

	public synchronized void setTitle(String title) {
		this.title = title;
	}

	public synchronized String getDescription() {
		return description;
	}

	public synchronized void setDescription(String description) {
		this.description = description;
	}
	public synchronized String getCoverImageFile() {
		return coverImageFile;
	}

	public synchronized void setCoverImageFile(String coverImageFile) {
		this.coverImageFile = coverImageFile;
	}

        public synchronized void setAuthor(String author){
                this.author = author;
        }
        public synchronized String getAuthor() {               
		return author;
	}

public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getImageFileName() {
		return imageFileName;
	}

	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}

}
