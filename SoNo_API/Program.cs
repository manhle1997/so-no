using Microsoft.Extensions.Options;
using SoNo_Data.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SoNoContext>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(o =>
{
    //o.SetIsOriginAllowedToAllowWildcardSubdomains();
    o.AllowAnyHeader();
    o.AllowAnyMethod();
    o.WithOrigins("http://localhost:4200");
    //o.SetIsOriginAllowed(or => true);
    //o.AllowCredentials();

});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
