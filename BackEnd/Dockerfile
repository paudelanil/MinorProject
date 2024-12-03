# Use Ubuntu as the base image
FROM python:3.10

# Set the working directory
WORKDIR /app

# Install system-level dependencies early
RUN apt-get update && apt-get install -y libgl1-mesa-glx

# Install Python dependencies
# Copy only requirements.txt first for better caching
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . /app

# Copy and set permissions for the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose the Django development server port
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

