
# Django Project Setup

## Requirements

- Python 3.10
- Conda (for virtual environment management)

## Setup Instructions

### 1. Create and activate a virtual environment

```bash
conda create -n myenv python=3.10
conda activate myenv
```

### 2. Install required dependencies

Install from `Requirements.txt` file:

```bash
pip install -r Requirements.txt
```


### 3. Download Model

Download the model from the provided Google Drive link and place it in the `mlmodel/models` directory.

```bash
gdown https://drive.google.com/uc?export=download&id=1VBvxLnRc1s_CmnaUDho_FwAfC6EBxgi1 -O mlmodel/models/affectnet_CNN_VGG_FIVEEMO_FINE_FINAL.h5
```

### 4. Set Up Django

Run migrations to set up your database:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Start the Django Development Server

```bash
python manage.py runserver 8000
```

Your Django project should now be running at [http://localhost:8000/](http://localhost:8000/).

