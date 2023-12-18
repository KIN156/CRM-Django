# Django CRM (Customer Relationship Management) App

## Description

Django CRM is an open-source Customer Relationship Management web application built using the Django framework. It helps businesses manage their customer interactions, streamline processes, and improve customer relationships.

## Features

- User authentication and authorization
- Customer and contact management
- Task management
- Dashboard for quick insights
- Responsive design for mobile and desktop

## Prerequisites

- Python 3.11.6
- Django 5.0
- Additional Python packages (see `requirements.txt`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KIN156/CRM-Django/
   cd CRM-Django
2. Create and activate a virtual environment (optional but recommended):

   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate  # On Windows

3. Install dependencies:
   pip install -r requirements.txt

4. Apply database migrations:
   python manage.py migrate

5. Create a superuser account:
   python manage.py createsuperuser

6. Run the development server:
   python manage.py runserver

