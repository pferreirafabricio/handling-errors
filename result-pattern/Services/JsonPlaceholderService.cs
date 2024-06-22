using System.Text.Json;
using ResultPattern.Core;
using ResultPattern.Domain.Response;

namespace ResultPattern.Services;

public class JsonPlaceholderService
{
    private readonly HttpClient client = new();

    public async Task<Result<PlaceholderResponse>> GetDataAsync(string url)
    {
        try
        {
            var response = await client.GetAsync(url);

            if (!response.IsSuccessStatusCode)
            {
                var error = new Error(response.StatusCode.ToString(), response.ReasonPhrase ?? "Unknown error");
                return Result.Failure<PlaceholderResponse>(error);
            }

            string responseBody = await response.Content.ReadAsStringAsync();

            if (string.IsNullOrWhiteSpace(responseBody))
            {
                var error = new Error("EmptyResponse", "Response body is empty");
                return Result.Failure<PlaceholderResponse>(error);
            }

            var data = JsonSerializer.Deserialize<PlaceholderResponse>(responseBody);

            if (data is null)
            {
                var error = new Error("InvalidResponse", "Response body is not in the expected format");
                return Result.Failure<PlaceholderResponse>(error);
            }

            return Result.Success(data);
        }
        // Are exceptions the right way to handle this? Are exceptions only for exceptional situations?
        catch (Exception ex)
        {
            var error = new Error("Exception", ex.Message);
            // Should I use the Result Pattern here?
            return Result.Failure<PlaceholderResponse>(error);
        }
    }
}

