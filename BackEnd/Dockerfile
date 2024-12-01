# Use Ubuntu as the base image
FROM python:3.10

# Set the working directory
WORKDIR /app

# Copy your project files
COPY . /app

RUN apt-get update && apt-get install -y libgl1-mesa-glx

# Install project-specific dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose the Django development server port
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

